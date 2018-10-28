import React from 'react'
import {mainIXModeNames} from 'App/reducers/visSettings'
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
    case mainIXModeNames.A:
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
    case mainIXModeNames.B:
      return (
        <ZoomSelectContainer
          zoomDimension="x"
          {...zoomContext}
          {...selectionContext}
        />
      )
    default:
      return undefined
  }
}

export default InteractionContainerFactory
