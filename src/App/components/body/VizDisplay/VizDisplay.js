import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import MainMLTS from './MainChart/MainMLTS'
import OverviewMLTS from './OverviewChart/OverviewMLTS'

const VizDisplayContainer = styled.div`
  height: 100%
  background-color: #ffffff

  display: flex
  flex-direction: column
`

class VizDisplay extends Component {
  constructor(props) {
    super(props)
    this.vizRef = null
    this.state = {
      width: 0,
      height: 0
    }
    this.onCursorChange = this.onCursorChange.bind(this)
  }

  componentDidMount () {
    this.setState({
      width: this.vizRef.offsetWidth,
      height: this.vizRef.offsetHeight
    })
  }

  onCursorChange(value, props) {
    this.props.action.setCursor({x: value.x || value, y: 0})
  }

  render() {
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <MainMLTS width={this.state.width}
                  height={this.state.height * 0.8}
                  xFieldName={this.props.state.referenceField}
                  dataFieldNames={this.props.state.activeFields}
                  data={this.props.state.data}
                  currentMode={this.props.state.interactionMode.value}
                  cursorContext={{
                    onCursorChange: this.onCursorChange,
                    defaultCursorValue: this.props.state.cursorContext
                  }} />
        <OverviewMLTS width={this.state.width}
                      height={this.state.height * 0.2}
                      xFieldName={this.props.state.referenceField}
                      dataFieldNames={this.props.state.activeFields}
                      data={this.props.state.data}
                      currentMode={this.props.state.interactionMode.value}
                      cursorContext={{
                        onCursorChange: this.onCursorChange,
                        defaultCursorValue: this.props.state.cursorContext
                      }} />
      </VizDisplayContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
