// Action types
export const types = {
  SET_DEFAULT: "SET_DEFAULT",
  SET_SIZE: "SET_SIZE",
  SET_COLOR: "SET_COLOR",
  MODIFY_PARAMS: "MODIFY_PARAMS",
}

// Action creators
export const actions = {
  setDefault: () => ({
    type: types.SET_DEFAULT
  }),
  setSize: (width, height) => ({
    type: types.SET_SIZE,
    width,
    height
  }),
  setColor: (color) => ({
    type: types.SET_COLOR,
    color
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
       "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
       "description": "A simple bar chart with embedded data.",
       "mark": {
         "type": "line",
         "color": "green"
       },
       "autosize": {
         "type": "fit",
         "resize": true,
         "contains": "padding"
       },
       "encoding": {
         "x": {"field": "a", "type": "temporal"},
         "y": {"field": "b", "type": "quantitative"}
       }
     }
 }

// Reducers
export default function reducer(state = initialState, action){
  switch (action.type) {
    case types.SET_DEFAULT:
      return initialState
    case types.SET_SIZE:
      return Object.assign(
        {},
        state,
        {
          "spec": {
            ...state.spec,
            "width": action.width,
            "height": action.height
          }
        }
      )
      case types.SET_COLOR:
        return Object.assign(
          {},
          state,
          {
            "spec": {
              ...state.spec,
              "mark": {
                ...state.spec.mark,
                "color": action.color
              }
            }
          }
        )
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
