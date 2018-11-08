import React from 'react'
import MultiLineTimeSeries from '../Prototype/MultiLineTimeSeries'
import InteractionContainerFactory from './InteractionContainerFactory'
import { VictoryLegend } from 'victory'

const internalFieldNameKey = "fieldName"
const MainMLTS = props => (
  <MultiLineTimeSeries
    width={props.width}
    height={props.height}
    internalFieldNameKey={internalFieldNameKey}
    xFieldName={props.xFieldName}
    dataFieldNames={props.dataFieldNames}
    data={props.data}
    interactionContainer={InteractionContainerFactory(
                            props.xFieldName,
                            props.currentMode,
                            internalFieldNameKey,
                            props.cursorContext,
                            props.voronoiContext,
                            props.zoomContext,
                            props.selectionContext,
                            props.brushContext)}
    legend={
      <VictoryLegend x={props.width * 0.8} y={50} width={80}
        title="Legend"
        centerTitle
        orientation="vertical"
        gutter={20}
        style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
        data={props.dataFieldNames.map(f => ({
          name: f.name,
          symbol: {
            fill: f.color
          },
          labels: {
            fill: f.color
          }
        }))}
      />
    }
    lineChartStyle={f => ({
      data: {
        stroke:f.color,
      },
      labels: {
        fill: f.color
      }
    })}
  />
)

export default MainMLTS
