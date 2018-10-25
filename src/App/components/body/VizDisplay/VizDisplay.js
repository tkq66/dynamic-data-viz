import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import MainMLTS from './MainChart/MainMLTS'

const VizDisplayContainer = styled.div`
  height: 100%
  background-color: #ffffff
`

class VizDisplay extends Component {
  constructor(props) {
    super(props)
    this.vizRef = null
    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount () {
    this.setState({
      width: this.vizRef.offsetWidth,
      height: this.vizRef.offsetHeight
    })
  }

  render() {
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <MainMLTS width={this.state.width}
                  height={this.state.height}
                  xFieldName={this.props.state.referenceField}
                  dataFieldNames={this.props.state.activeFields}
                  data={this.props.state.data}
                  currentMode={this.props.state.interactionMode.value} />
      </VizDisplayContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
