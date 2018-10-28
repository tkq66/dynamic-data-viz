import React from 'react'
import MultiLineTimeSeries from '../Prototype/MultiLineTimeSeries'
import InteractionContainerFactory from './InteractionContainerFactory'

const internalFieldNameKey = "fieldName"
const OverviewMLTS = props => (
  <MultiLineTimeSeries
    width={props.width}
    height={props.height}
    internalFieldNameKey={internalFieldNameKey}
    xFieldName={props.xFieldName}
    dataFieldNames={props.dataFieldNames}
    data={props.data}
    interactionContainer={InteractionContainerFactory(props.currentMode,
                                                      internalFieldNameKey,
                                                      props.cursorContext,
                                                      props.brushContext)}
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

export default OverviewMLTS
