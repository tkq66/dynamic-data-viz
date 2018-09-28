import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import VegaLite from 'react-vega-lite'

const VizDisplayContainer = styled.div`
  height: 100%
  background-color: #ffffff
`

const barData = {
  "values": [
    {"a": 1091289600000,"b": 20}, {"a": 1093968000000,"b": 34}, {"a": 1096560000000,"b": 55},
    {"a": 1099238400000, "b": 19}, {"a": 1101830400000,"b": 40}, {"a": 1104508800000,"b": 34},
    {"a": 1107187200000,"b": 91}, {"a": 1109606400000,"b": 78}, {"a": 1112284800000,"b": 25}
  ]
}

class VizDisplay extends Component {
  constructor(props) {
    super(props)
    this.vizRef = null
  }

  componentDidMount () {
    this.props.action.setSize(this.vizRef.offsetWidth, this.vizRef.offsetHeight)
  }

  render() {
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <VegaLite spec={this.props.state.spec} data={barData} />
      </VizDisplayContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
