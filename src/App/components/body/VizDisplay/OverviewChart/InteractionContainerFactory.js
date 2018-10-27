import React from 'react'
import {interactionModeNames} from 'App/reducers/visSettings'
import { createContainer,
         VictoryTooltip,
         VictoryVoronoiContainer } from 'victory'

const BrushCursorContainer = createContainer("brush", "cursor")

const InteractionContainerFactory = (modeName,
                                     internalFieldNameKey,
                                     cursorContext) => {
  switch(modeName) {
    case interactionModeNames.LOCATE:
      return (
        <BrushCursorContainer
          brushDimension="x"
          cursorDimension="x"
          cursorLabel={(d) => `${(!d.x ? new Date() : d.x instanceof Date ? d.x : new Date(d.x)).toLocaleDateString("en-GB")}`}
          {...cursorContext}
        />
      )
    default:
      return (
        <VictoryVoronoiContainer
          voronoiDimension="x"
          labels={(d) => `${d[internalFieldNameKey]}: ${d[d[internalFieldNameKey]]}`}
          labelComponent={
            <VictoryTooltip
              cornerRadius={0}
              flyoutStyle={{ fill: "white" }}
            />}
        />
      )
  }
}

export default InteractionContainerFactory
