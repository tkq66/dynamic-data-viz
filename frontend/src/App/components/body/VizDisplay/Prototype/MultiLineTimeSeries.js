import React from 'react'
import { VictoryChart,VictoryScatter,
         VictoryAxis,
         VictoryTheme,
         VictoryLine } from 'victory'

const MultiLineTimeSeries = (props) => (
  <VictoryChart
    theme={VictoryTheme.material}
    width={props.width}
    height={props.height}
    domain={props.entireDomain}
    scale={{ x: "time", y: "linear" }}
    containerComponent={props.interactionContainer}
  >
    {props.legend}
    <VictoryAxis offsetY={50}/>
    <VictoryAxis dependentAxis offsetX={50} crossAxis={false}/>
    {props.xFieldName !== "" &&
      props.dataFieldNames.map(f =>
          <VictoryLine
            key={f.name}
            data={props.data}
            x={d => new Date(d[props.xFieldName])}
            y={d => {
              d[props.internalFieldNameKey] = f.name
              return d[f.name]
            }}
            style={props.lineChartStyle(f)}
          />)
    }
  </VictoryChart>
)

export default MultiLineTimeSeries
