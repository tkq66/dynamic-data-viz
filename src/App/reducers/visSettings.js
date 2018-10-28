import randomColor from 'randomcolor'

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
  setDomain: (x, y) => ({type: types.SET_DOMAIN, x, y}),
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

const initialState = {
  data: {},
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
  domain: undefined
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
      return Object.assign(
        {},
        state,
        {
          referenceField: action.field,
          trueFields: filteredFieldObjectList,
          activeFields: filteredFieldObjectList,
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
            y: action.y
          }
        }
      )
    default:
      return state
  }
}
