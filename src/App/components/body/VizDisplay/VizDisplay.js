import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import randomColor from 'randomcolor'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryVoronoiContainer, VictoryTooltip } from 'victory'

const VizDisplayContainer = styled.div`
  height: 100%
  background-color: #ffffff
`

class VizDisplay extends Component {
  constructor(props) {
    super(props)
    this.vizRef = null
    this.tracker = null
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
    let fieldNameKey = "fieldName"
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <VictoryChart
          theme={VictoryTheme.material}
          width={this.state.width}
          height={this.state.height}
          scale={{ x: "time", y: "linear" }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={(d) => `${d[fieldNameKey]}: ${d[d[fieldNameKey]]}`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  flyoutStyle={{ fill: "white" }}
                />}
            />}
          >
          {this.props.state.referenceField !== "" &&
            this.props.state.fields
              .filter(f => f !== this.props.state.referenceField)
              .map(f => {
                let fieldColor = randomColor()
                return <VictoryLine
                    key={f}
                    data={this.props.state.data}
                    x={d => new Date(d[this.props.state.referenceField])}
                    y={d => {
                      d[fieldNameKey] = f
                      return d[f]
                    }}
                    style={{
                      data: {
                        stroke:fieldColor,
                        strokeWidth: (d, active) => {return active ? 4 : 2;}
                      },
                      labels: {
                        fill: fieldColor
                      }
                    }}
                  />
              })
          }
        </VictoryChart>
      </VizDisplayContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
