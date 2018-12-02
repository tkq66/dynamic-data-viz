import randomColor from 'randomcolor'
import _ from 'lodash'
import { getPeaks } from './peakDetection'

const SAMPLING_MAX_POINTS = 150

// Action types
export const types = {
  SET_DATA: "SET_DATA",
  SET_REF_FIELD: "SET_REF_FIELD",
  SET_ACTIVE_FIELDS: "SET_ACTIVE_FIELDS",
  SET_MODE_MAIN: "SET_MODE_MAIN",
  SET_MODE_OVERVIEW: "SET_MODE_OVERVIEW",
  SET_CURSOR: "SET_CURSOR",
  SET_DOMAIN: "SET_DOMAIN"
}

// Action creators
export const actions = {
  setData: (data, fields) => ({type: types.SET_DATA, data, fields}),
  setRefField: field => ({type: types.SET_REF_FIELD, field}),
  setActiveFields: fields => ({type: types.SET_ACTIVE_FIELDS, fields}),
  setModeMain: modeName => ({type: types.SET_MODE_MAIN, modeName}),
  setModeOverview: modeName => ({type: types.SET_MODE_OVERVIEW, modeName}),
  setCursor: cursorValue => ({type: types.SET_CURSOR, cursorValue}),
  setDomain: (x, y, domainChangeMode) => ({type: types.SET_DOMAIN, x, y, domainChangeMode}),
}

/**
  State Shape:
  {
    data: {
      ...
    },
    referenceField: "", // string label of the field in the data to be used as the independent axis
    fields: [
      // list of string of labels for data
    ],
    trueFields: [
      // labels without the reference label
    ],
    activeFields: [
      // labels without the reference label that is allowed to be displayed
    ]
  }
*/
// Reference values for each interaction mode
export const mainIXModeNames = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  K: "k"
}
export const mainIXModeRef = {
  [mainIXModeNames.A]: {
    value: mainIXModeNames.A,
    label: "A",
    detail: "Voronoi (y-axis) + Cursor (x-axis)"
  },
  [mainIXModeNames.B]:  {
    value: mainIXModeNames.B,
    label: "B",
    detail: "Zoom + Selection"
  },
  [mainIXModeNames.C]:  {
    value: mainIXModeNames.C,
    label: "C",
    detail: "Zoom + Voronoi (y-axis)"
  },
  [mainIXModeNames.D]:  {
    value: mainIXModeNames.D,
    label: "D",
    detail: "Zoom + Cursor (x-axis)"
  },
  [mainIXModeNames.E]:  {
    value: mainIXModeNames.E,
    label: "E",
    detail: "Selection + Voronoi (y-axis)"
  },
  [mainIXModeNames.F]:  {
    value: mainIXModeNames.F,
    label: "F",
    detail: "Selection + Cursor (x-axis)"
  },
  [mainIXModeNames.G]:  {
    value: mainIXModeNames.G,
    label: "G",
    detail: "Cursor (x-axis)"
  },
  [mainIXModeNames.H]:  {
    value: mainIXModeNames.H,
    label: "H",
    detail: "Voronoi (y-axis)"
  },
  [mainIXModeNames.I]:  {
    value: mainIXModeNames.I,
    label: "I",
    detail: "Zoom"
  },
  [mainIXModeNames.J]:  {
    value: mainIXModeNames.J,
    label: "J",
    detail: "Selection"
  },
  [mainIXModeNames.K]:  {
    value: mainIXModeNames.K,
    label: "K",
    detail: "Brush"
  },
}
export const overviewIXModeNames = {
  X: "x",
  Y: "y",
}
export const overviewIXModeRef = {
  [overviewIXModeNames.X]: {
    value: overviewIXModeNames.X,
    label: "X",
    detail: "Brush over x-axis"
  },
  [overviewIXModeNames.Y]:  {
    value: overviewIXModeNames.Y,
    label: "Y",
    detail: "Brush over y-axis"
  },
}
export const domainChangeMode = {
  ZOOM: "zoom",
  SELECTION: "selection",
  BRUSH: "brush"
}

const initialState = {
  data: [],
  overviewData: [],
  peakData: [],
  referenceField: "",
  fields: [],
  trueFields: [],
  activeFields: [],
  interactionMode: {
    main: mainIXModeRef[mainIXModeNames.A],
    overview: overviewIXModeRef[overviewIXModeNames.X]
  },
  cursorContext: {
    x: Date.now(),
    y: 0
  },
  domain: undefined,
  entireDomain: undefined
}

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      let fieldObjectList = action.fields.map(f => ({
        name: f,
        color: randomColor().toString(),
        id: Date.now()
      }))
      return Object.assign(
        {},
        state,
        {
          data: action.data,
          fields: fieldObjectList,
          trueFields: fieldObjectList,
          activeFields: fieldObjectList,
        }
      )
    case types.SET_REF_FIELD:
      let filteredFieldObjectList = state.fields.filter(f => f.name !== action.field)
      let domain =  {
        x: [ new Date(state.data[0][action.field]),
             new Date(_.last(state.data)[action.field]) ],
        y: [Math.min(
              ...filteredFieldObjectList.map(
                yField => _.minBy(state.data,  d => d[yField.name])[yField.name]
              )
            ),
            Math.max(
              ...filteredFieldObjectList.map(
                yField => _.maxBy(state.data,  d => d[yField.name])[yField.name]
              )
            )
          ],
      }
      let peakData = sampleData(state.data, {mode: "PH",
                                             fields: filteredFieldObjectList.map(f => f.name),
                                             refField: action.field,
                                             xDomain: domain.x})
      let overviewData = sampleData(peakData, {mode: "TOP",
                                               fields: filteredFieldObjectList.map(f => f.name),
                                               refField: action.field,
                                               top: SAMPLING_MAX_POINTS,
                                               xDomain: domain.x})
      return Object.assign(
        {},
        state,
        {
          peakData: peakData,
          overviewData: overviewData,
          referenceField: action.field,
          trueFields: filteredFieldObjectList,
          activeFields: filteredFieldObjectList,
          domain: domain,
          entireDomain: domain,
        }
      )
    case types.SET_ACTIVE_FIELDS:
      let filteredActiveFields = state.trueFields.filter(f => action.fields.indexOf(f.name) >= 0)
      return Object.assign(
        {},
        state,
        {
          activeFields: filteredActiveFields
        }
      )
    case types.SET_MODE_MAIN:
      return Object.assign(
        {},
        state,
        {
          interactionMode: {
            ...state.interactionMode,
            main: mainIXModeRef[action.modeName]
          }
        }
      )
    case types.SET_MODE_OVERVIEW:
      return Object.assign(
        {},
        state,
        {
          interactionMode: {
            ...state.interactionMode,
            overview: overviewIXModeRef[action.modeName]
          }
        }
      )
    case types.SET_CURSOR:
      return Object.assign(
        {},
        state,
        {
          cursorContext: {
            x: !action.cursorValue.x ? Date.now() : action.cursorValue.x instanceof Date ? action.cursorValue.x.valueOf() : action.cursorValue.x,
            y: action.cursorValue.y || 0
          }
        }
      )
    case types.SET_DOMAIN:
      return Object.assign(
        {},
        state,
        {
          domain: {
            x: action.x,
            y: action.y,
            mode: action.domainChangeMode
          }
        }
      )
    default:
      return state
  }
}

// Selectors
export const getData = state => {
  return (state.referenceField === "" || !state.domain || state.peakData.length === 0)
                                ? state.data
                                : sampleData(state.peakData,
                                             {mode: "TOP",
                                              fields: state.activeFields.map(f => f.name),
                                              refField: state.referenceField,
                                              xDomain: state.domain.x
                                             })}

const sampleData = (data,
                    {mode="PH",
                     fields=undefined,
                     top=SAMPLING_MAX_POINTS,
                     refField=undefined,
                     xDomain=undefined,
                     sortKey="persistence"}) => {
  let filtered = filterDataDomain(data, refField, xDomain)
  return mode === "PH"
         ? persistentHomologyPeakSampling(filtered, fields)
         : mode === "IV"
         ? intervalSampling(filtered)
         : mode === "TOP"
         ? filterDataTop(filtered, top, sortKey)
         : []
}

const persistentHomologyPeakSampling = (data, fields) => getPeaks(data, fields)

const intervalSampling = (data) => {
  let k = Math.ceil(data.length / SAMPLING_MAX_POINTS)
  return (data.length > SAMPLING_MAX_POINTS)
          ? data.filter((d, i) => ((i % k) === 0))
          : data
}

const filterDataDomain = (data, refField, xDomain) =>
  data.filter(d => (Date.parse(d[refField]) >= Date.parse(xDomain[0]) &&
                    Date.parse(d[refField]) <= Date.parse(xDomain[1])))

const filterDataTop = (data, top, sortKey) => {
  let i = []
  return _.transform(_.cloneDeep(data).sort((a, b) => b[sortKey] - a[sortKey]),
                     (acc, cv, ci) => {
                       if (i.indexOf(cv.index) === -1) {
                         i.push(cv.index)
                         acc.push(cv)
                       }
                       return acc.length < top
                     }, [])
}
