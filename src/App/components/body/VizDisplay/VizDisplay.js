import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import { createContainer, VictoryLine, VictoryChart, VictoryTheme, VictoryVoronoiContainer, VictoryTooltip, VictoryLegend } from 'victory'

const VoronoiCursorContainer = createContainer("voronoi", "cursor")

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
    let fieldNameKey = "fieldName"
    return (
      <VizDisplayContainer innerRef={r => this.vizRef = r}>
        <VictoryChart
          theme={VictoryTheme.material}
          width={this.state.width}
          height={this.state.height}
          scale={{ x: "time", y: "linear" }}
          containerComponent={
            <VoronoiCursorContainer
              voronoiDimension="x"
              labels={(d) => `${d[fieldNameKey]}: ${d[d[fieldNameKey]]}`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  flyoutStyle={{ fill: "white" }}
                />}
              cursorDimension="x"
              cursorLabel={(d) => `${d.x}`}
            />}
        >
            <VictoryLegend x={this.state.width * 0.8} y={50} width={80}
            	title="Legend"
              centerTitle
              orientation="vertical"
              gutter={20}
              style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
              data={this.props.state.activeFields.map(f => ({
                name: f.name,
                symbol: {
                  fill: f.color
                },
                labels: {
                  fill: f.color
                }
              }))}
            />
          {this.props.state.referenceField !== "" &&
            this.props.state.activeFields.map(f =>
                <VictoryLine
                  key={f.name}
                  data={this.props.state.data}
                  x={d => new Date(d[this.props.state.referenceField])}
                  y={d => {
                    d[fieldNameKey] = f.name
                    return d[f.name]
                  }}
                  style={{
                    data: {
                      stroke:f.color,
                      strokeWidth: (d, active) => {return active ? 4 : 2;}
                    },
                    labels: {
                      fill: f.color
                    }
                  }}
                />)
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
