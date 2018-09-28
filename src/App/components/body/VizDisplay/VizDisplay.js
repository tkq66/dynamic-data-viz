import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import VegaLite from 'react-vega-lite'

const VizDisplayContainer = styled.div`
  height: 100%
  background-color: #ffffff
`

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
        <VegaLite spec={this.props.state.spec} data={this.props.state.data} />
      </VizDisplayContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
