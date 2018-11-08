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
  }

  componentDidMount () {
    this.setState({
      width: this.vizRef.offsetWidth,
      height: this.vizRef.offsetHeight
    })
  }

  onMainCursorChange(value, props) {
    // TODO: Log activity on view
  }

  onMainZoomChange(domain) {
    this.props.action.setDomain(domain.x, domain.y)
    // TODO: Log activity on view
  }

  onMainSelectionChange(points, bounds, props) {
    let domain = {
      x: bounds.x.map(b => b.valueOf()),
      y: bounds.y
    }
    this.props.action.setDomain(domain.x, domain.y)
    // TODO: Log activity on view
  }

  onOverviewCursorChange(value, props) {
    // TODO: Log activity on view
  }

  onOverviewBrushChange(domain) {
    this.props.action.setDomain(domain.x, domain.y)
    // TODO: Log activity on view
  }

  render() {
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <MainMLTS width={this.state.width}
                  height={this.state.height * 0.8}
                  xFieldName={this.props.state.referenceField}
                  dataFieldNames={this.props.state.activeFields}
                  data={this.props.state.data}
                  currentMode={this.props.state.mainIXMode.value}
                  cursorContext={{
                    onCursorChange: this.onMainCursorChange.bind(this),
                  }}
                  zoomContext={{
                    zoomDomain: this.props.state.domain,
                    onZoomDomainChange: this.onMainZoomChange.bind(this)
                  }}
                  selectionContext={{
                    onSelection: this.onMainSelectionChange.bind(this)
                  }}
                  brushContext={{
                    brushDomain: this.props.state.domain,
                    onBrushDomainChange: this.onOverviewBrushChange.bind(this)
                  }}/>
        <OverviewMLTS width={this.state.width}
                      height={this.state.height * 0.2}
                      xFieldName={this.props.state.referenceField}
                      dataFieldNames={this.props.state.activeFields}
                      data={this.props.state.data}
                      currentMode={this.props.state.overviewIXMode.value}
                      cursorContext={{
                        onCursorChange: this.onOverviewCursorChange.bind(this),
                      }}
                      brushContext={{
                        brushDomain: this.props.state.domain,
                        onBrushDomainChange: this.onOverviewBrushChange.bind(this)
                      }}/>
      </VizDisplayContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
