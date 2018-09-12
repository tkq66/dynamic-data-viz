// Action types
export const types = {
  SET_DEFAULT: "SET_DEFAULT",
  MODIFY_PARAMS: "MODIFY_PARAMS",
}

// Action creators
export const actions = {
  setDefault: () => ({
    type: types.SET_DEFAULT
  }),
  modifyParams: newParams => ({
    type: types.MODIFY_PARAMS,
    newParams
  })
}

/**
  State Shape:
  {
    spec: {
      //  VegaLite's spec for each visualization type
    }
  }
*/
const initialState = {
   spec: {
       "description": "A simple bar chart with embedded data.",
       "mark": "bar",
       "autosize": {
         "type": "fit",
         "resize": true,
         "contains": "padding"
       },
       "encoding": {
         "x": {"field": "a", "type": "ordinal"},
         "y": {"field": "b", "type": "quantitative"}
       }
     }
 }

// Reducers
export default function reducer(state = initialState, action){
  switch (action.type) {
    case types.SET_DEFAULT:
      return initialState
    case types.MODIFY_PARAMS:
      return Object.assign(
        {},
        state,
        {
          spec: action.newParams
        }
      )
    default:
      return state
  }
}
