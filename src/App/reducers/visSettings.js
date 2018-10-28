import randomColor from 'randomcolor'

// Action types
export const types = {
  SET_DATA: "SET_DATA",
  SET_REF_FIELD: "SET_REF_FIELD",
  SET_ACTIVE_FIELDS: "SET_ACTIVE_FIELDS",
  SET_MODE: "SET_MODE",
  SET_CURSOR: "SET_CURSOR"
}

// Action creators
export const actions = {
  setData: (data, fields) => ({type: types.SET_DATA, data, fields}),
  setRefField: field => ({type: types.SET_REF_FIELD, field}),
  setActiveFields: fields => ({type: types.SET_ACTIVE_FIELDS, fields}),
  setMode: modeName => ({type: types.SET_MODE, modeName}),
  setCursor: cursorValue => ({type: types.SET_CURSOR, cursorValue}),
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
export const interactionModeNames = {
  A: "a",
  B: "b"
}
export const interactionModeRef = {
  [interactionModeNames.A]: {
    value: interactionModeNames.A,
    label: "A",
    detail: "Voronoi (y-axis) + Cursor (x-axis)"
  },
  [interactionModeNames.B]:  {
    value: interactionModeNames.B,
    label: "B",
    detail: "Zoom + Voronoi (y-axis)"
  }
}
const initialState = {
  data: {},
  referenceField: "",
  fields: [],
  trueFields: [],
  activeFields: [],
  interactionMode: interactionModeRef[interactionModeNames.A],
  cursorContext: {
    x: Date.now(),
    y: 0
  }
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
          activeFields: fieldObjectList
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
          activeFields: filteredFieldObjectList
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
    case types.SET_MODE:
      return Object.assign(
        {},
        state,
        {
          interactionMode: interactionModeRef[action.modeName]
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
    default:
      return state
  }
}
