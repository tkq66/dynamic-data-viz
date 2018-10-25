import React from 'react'
import {interactionModeNames} from 'App/reducers/visSettings'
import { createContainer,
         VictoryTooltip,
         VictoryVoronoiContainer } from 'victory'

const VoronoiCursorContainer = createContainer("voronoi", "cursor")

const InteractionContainerFactory = (modeName, internalFieldNameKey) => {
  switch(modeName) {
    case interactionModeNames.LOCATE:
      return (
        <VoronoiCursorContainer
          voronoiDimension="x"
          labels={(d) => `${d[internalFieldNameKey]}: ${d[d[internalFieldNameKey]]}`}
          labelComponent={
            <VictoryTooltip
              cornerRadius={0}
              flyoutStyle={{ fill: "white" }}
            />}
          cursorDimension="x"
          cursorLabel={(d) => `${d.x.toLocaleDateString("en-GB")}`}
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
