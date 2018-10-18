// Action types
export const types = {
  SET_DATA: "SET_DATA",
  SET_DEFAULT: "SET_DEFAULT",
  SET_SIZE: "SET_SIZE",
  SET_COLOR: "SET_COLOR",
  ENABLE_ZOOM: "ENABLE_ZOOM",
  DISABLE_ZOOM: "DISABLE_ZOOM",
  SET_ENCODING: "SET_ENCODING",
  MODIFY_PARAMS: "MODIFY_PARAMS",
}

// Action creators
export const actions = {
  setData: data => ({
    type: types.SET_DATA,
    data
  }),
  setDefault: () => ({
    type: types.SET_DEFAULT
  }),
  setSize: (width, height) => ({
    type: types.SET_SIZE,
    width,
    height
  }),
  setColor: color => ({
    type: types.SET_COLOR,
    color
  }),
  enableZoom: () => ({
    type: types.ENABLE_ZOOM
  }),
  disableZoom: () => ({
    type: types.DISABLE_ZOOM
  }),
  setEncoding: encoding => ({
    type: types.SET_ENCODING,
    encoding
  }),
  modifyParams: newParams => ({
    type: types.MODIFY_PARAMS,
    newParams
  })
}

/**
  State Shape:
  {
    data: {
      // VegaLite's data format
    },
    spec: {
      //  VegaLite's spec for each visualization type
    }
  }
*/
const initialState = {
  data: {},
  spec: {
     "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
     "description": "A simple bar chart with embedded data.",
     "data": {
       "url": "http://localhost:3000/data/turkey_stock_data.csv"
     },
     "selection": {
       // "grid": {
       //   "type": "interval",
       //   "bind": "scales",
       //   "on": "[mousedown, window:mouseup] > window:mousemove!",
       //   "encodings": ["x", "y"],
       //   "translate": "[mousedown, window:mouseup] > window:mousemove!",
       //   "zoom": "wheel!",
       //   "mark": {"fill": "#333", "fillOpacity": 0.125, "stroke": "white"},
       //   "resolve": "global"
       // },
       "brush": {
         "type": "interval",
         "encodings": ["x"]
       }
     },
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
       x: {
         field: "date",
         type: "temporal",
         "timeUnit": "utcyearmonthdate"
       },
       y: {
         field: "price",
         type: "quantitative"
       },
       color: {
         field: "symbol",
         type: "nominal"
       }
     }
   }
 }

// Reducers
export default function reducer(state = initialState, action){
  switch (action.type) {
    case types.SET_DATA:
      return Object.assign(
        {},
        state,
        {
          "data": action.data
        }
      )
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
    case types.SET_ENCODING:
      return Object.assign(
        {},
        state,
        {
          "spec": {
            ...state.spec,
            "encoding": action.encoding
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
