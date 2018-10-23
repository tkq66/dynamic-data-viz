// Action types
export const types = {
  SET_DATA: "SET_DATA",
  SET_REF_FIELD: "SET_REF_FIELD",
}

// Action creators
export const actions = {
  setData: (data, fields) => ({type: types.SET_DATA, data, fields}),
  setRefField: field => ({type: types.SET_REF_FIELD, field}),
}

/**
  State Shape:
  {
    data: {
      ...
    },
    fields: [
      // list of string of labels for data
    ],
    referenceField: "" // string label of the field in the data to be used as the independent axis
  }
*/
const initialState = {
  data: {},
  fields: [],
  referenceField: ""
}

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return Object.assign(
        {},
        state,
        {
          data: action.data,
          fields: action.fields
        }
      )
    case types.SET_REF_FIELD:
      return Object.assign(
        {},
        state,
        {
          referenceField: action.field
        }
      )
    default:
      return state
  }
}
