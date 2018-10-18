import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import VegaLite from 'react-vega-lite'
import EventTracker from 'App/eventTrackers/eventTracker.js'

const VizDisplayContainer = styled.div`
  height: 100%
  background-color: #ffffff
`

class VizDisplay extends Component {
  constructor(props) {
    super(props)
    this.vizRef = null
    this.tracker = null
    this.attachEventListeners = this.attachEventListeners.bind(this)
  }

  componentDidMount () {
    this.props.action.setSize(this.vizRef.offsetWidth, this.vizRef.offsetHeight)

  }

  attachEventListeners(e) {
    this.tracker = new EventTracker(e)
  }

  render() {
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <VegaLite spec={this.props.state.spec} onNewView={this.attachEventListeners} />
      </VizDisplayContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
