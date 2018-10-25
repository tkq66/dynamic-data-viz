import randomColor from 'randomcolor'

// Action types
export const types = {
  SET_DATA: "SET_DATA",
  SET_REF_FIELD: "SET_REF_FIELD",
  SET_ACTIVE_FIELDS: "SET_ACTIVE_FIELDS",
  SET_LOCATE_MODE: "SET_LOCATE_MODE",
}

// Action creators
export const actions = {
  setData: (data, fields) => ({type: types.SET_DATA, data, fields}),
  setRefField: field => ({type: types.SET_REF_FIELD, field}),
  setActiveFields: fields => ({type: types.SET_ACTIVE_FIELDS, fields}),
  setLocateMode: () => ({type: types.SET_LOCATE_MODE})
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
const initialState = {
  data: {},
  referenceField: "",
  fields: [],
  trueFields: [],
  activeFields: [],
  mode: [true, false]
}

// For index reference for the mode list state
export const modeIndexReference = {
  locate: 0,
  zoom: 1
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
    case types.SET_LOCATE_MODE:
      return Object.assign(
        {},
        state,modeIndexReference,
        {
          mode: state.mode.map((m, i) => (i === modeIndexReference.locate) ? true : false)
        }
      )
    default:
      return state
  }
}

// Selectors
export const modeName = state => Object.keys(modeIndexReference).filter(k => state.mode[modeIndexReference[k]])[0]
export const isLocateMode = state => state.mode[modeIndexReference.locate]
