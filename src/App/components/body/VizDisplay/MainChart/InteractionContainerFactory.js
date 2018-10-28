import React from 'react'
import {interactionModeNames} from 'App/reducers/visSettings'
import { createContainer,
         VictoryTooltip } from 'victory'

const VoronoiCursorContainer = createContainer("voronoi", "cursor")
const ZoomSelectContainer = createContainer("zoom", "selection")

const InteractionContainerFactory = (xFieldName,
                                     modeName,
                                     internalFieldNameKey,
                                     cursorContext,
                                     zoomContext,
                                     selectionContext) => {
  switch(modeName) {
    case interactionModeNames.A:
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
          cursorLabel={(d) => `${(!d.x ? new Date() : d.x instanceof Date ? d.x : new Date(d.x)).toLocaleDateString("en-GB")}`}
          {...cursorContext}
        />
      )
    default:
      return (
        <ZoomSelectContainer
          zoomDimension="x"
          {...zoomContext}
          {...selectionContext}
        />
      )
  }
}

export default InteractionContainerFactory
