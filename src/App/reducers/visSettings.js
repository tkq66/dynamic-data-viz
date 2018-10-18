// Action types
export const types = {
  SET_DATA: "SET_DATA",
  SET_DEFAULT: "SET_DEFAULT",
  SET_SIZE: "SET_SIZE",
  ENABLE_ZOOM: "ENABLE_ZOOM",
  DISABLE_ZOOM: "DISABLE_ZOOM",
  MODIFY_PARAMS: "MODIFY_PARAMS"
}

// Action creators
export const actions = {
  setData: data => ({type: types.SET_DATA, data}),
  setDefault: () => ({type: types.SET_DEFAULT}),
  setSize: (width, height) => ({type: types.SET_SIZE, width, height}),
  enableZoom: () => ({type: types.ENABLE_ZOOM}),
  disableZoom: () => ({type: types.DISABLE_ZOOM}),
  modifyParams: newParams => ({type: types.MODIFY_PARAMS, newParams})
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
    "vconcat": [
      {
        "width": 480,
        "mark": "area",
        "encoding": {
          x: {
            field: "date",
            type: "temporal",
            "timeUnit": "utcyearmonthdate",
            "scale": {
              "domain": {
                "selection": "brush"
              }
            },
            "axis": {
              "title": ""
            }
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
      }, {
        "width": 480,
        "height": 60,
        "mark": "area",
        "selection": {
          "brush": {
            "type": "interval",
            "encodings": ["x"]
          }
        },
        "encoding": {
          x: {
            field: "date",
            type: "temporal",
            "timeUnit": "utcyearmonthdate",
            "axis": {
              "title": ""
            }
          },
          y: {
            field: "price",
            type: "quantitative",
            "axis": {
              "tickCount": 3,
              "grid": false
            }
          },
          color: {
            field: "symbol",
            type: "nominal"
          }
        }
      }
    ]
  }
}

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return Object.assign({}, state, {"data": action.data})
    case types.SET_DEFAULT:
      return initialState
    case types.SET_SIZE:
      // total proportions of top and bottom view must be 0.9 otherwise
      // it would overflow
      return Object.assign({}, state, {
        "spec": {
          ...state.spec,
          "vconcat": [
            {
              ...state.spec.vconcat[0],
              "width": action.width,
              "height": action.height * 0.7
            }, {
              ...state.spec.vconcat[1],
              "width": action.width,
              "height": action.height * 0.2
            }
          ]
        }
      })
    case types.MODIFY_PARAMS:
      return Object.assign({}, state, {spec: action.newParams})
    default:
      return state
  }
}
