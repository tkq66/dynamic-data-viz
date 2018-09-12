import React, { Component } from 'react'
import styled from 'styled-components'
import VegaLite from 'react-vega-lite'

const VizDisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e6f6ff;
`

const spec = {
  "description": "A simple bar chart with embedded data.",
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"}
  }
};

const barData = {
  "values": [
    {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
    {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
    {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
  ]
};

class VizDisplay extends Component {
  render() {
    return (
      <VizDisplayContainer>
        <VegaLite spec={spec} data={barData} />
      </VizDisplayContainer>
    )
  }
}

export default VizDisplay
