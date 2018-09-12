import React, { Component } from 'react'
import styled from 'styled-components'
import VegaLite from 'react-vega-lite'

const VizDisplayContainer = styled.div`
  height: 100%;
  background-color: #e6f6ff;
`

const barData = {
  "values": [
    {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
    {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
    {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
  ]
}

class VizDisplay extends Component {
  constructor(props) {
    super(props);
    this.vizRef = null
  }

  componentDidMount () {
    console.log(this.vizRef.offsetWidth)
    console.log(this.vizRef.offsetHeight)
    this.props.action.modifyParams(Object.assign(
      {},
      this.props.state.spec,
      {
        "width": this.vizRef.offsetWidth,
        "height": this.vizRef.offsetHeight
      }
    ))
  }

  render() {
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <VegaLite spec={this.props.state.spec} data={barData} />
      </VizDisplayContainer>
    )
  }
}

export default VizDisplay
