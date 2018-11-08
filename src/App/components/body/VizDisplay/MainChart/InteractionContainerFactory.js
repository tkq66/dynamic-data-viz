import React from 'react'
import {mainIXModeNames} from 'App/reducers/visSettings'
import { createContainer,
         VictoryCursorContainer,
         VictoryVoronoiContainer,
         VictoryZoomContainer,
         VictorySelectionContainer,
         VictoryBrushContainer,
         VictoryTooltip } from 'victory'

const VoronoiCursorContainer = createContainer("voronoi", "cursor")
const ZoomSelectContainer = createContainer("zoom", "selection")
const ZoomVoronoiContainer = createContainer("zoom", "voronoi")
const ZoomCursorContainer = createContainer("zoom", "cursor")
const SelectVoronoiContainer = createContainer("selection", "voronoi")
const SelectCursorContainer = createContainer("selection", "cursor")

const InteractionContainerFactory = (xFieldName,
                                     modeName,
                                     internalFieldNameKey,
                                     cursorContext,
                                     voronoiContext,
                                     zoomContext,
                                     selectionContext,
                                     brushContext) => {
  let containerProps = {
    voronoi: {
      voronoiDimension: "x",
      labels: (d) => `${d[internalFieldNameKey]}: ${d[d[internalFieldNameKey]]}`,
      labelComponent: (
        <VictoryTooltip cornerRadius={0} flyoutStyle={{
          fill: "white"
        }}/>
      ),
      ...voronoiContext
    },
    cursor: {
      cursorDimension: "x",
      cursorLabel: (d) => `${ (
        !d.x
        ? new Date()
        : d.x instanceof Date
          ? d.x
          : new Date(d.x)).toLocaleDateString("en-GB")}`,
      ...cursorContext
    },
    zoom: {
      zoomDimension: "x",
      ...zoomContext
    },
    selection: {
      ...selectionContext
    },
    brush: {
      brushDimension: "x",
      ...brushContext
    }
  }

  switch(modeName) {
    case mainIXModeNames.A:
      return (
        <VoronoiCursorContainer
          {...containerProps.voronoi}
          {...containerProps.cursor}
        />
      )
    case mainIXModeNames.B:
      return (
        <ZoomSelectContainer
          {...containerProps.zoom}
          {...containerProps.selection}
        />
      )
    case mainIXModeNames.C:
      return (
        <ZoomVoronoiContainer
          {...containerProps.zoom}
          {...containerProps.voronoi}
        />
      )
    case mainIXModeNames.D:
      return (
        <ZoomCursorContainer
          {...containerProps.zoom}
          {...containerProps.cursor}
        />
      )
    case mainIXModeNames.E:
      return (
        <SelectVoronoiContainer
          {...containerProps.selection}
          {...containerProps.voronoi}
        />
      )
    case mainIXModeNames.F:
      return (
        <SelectCursorContainer
          {...containerProps.selection}
          {...containerProps.cursor}
        />
      )
    case mainIXModeNames.G:
      return (
        <VictoryCursorContainer
          {...containerProps.cursor}
        />
      )
    case mainIXModeNames.H:
      return (
        <VictoryVoronoiContainer
          {...containerProps.voronoi}
        />
      )
    case mainIXModeNames.I:
      return (
        <VictoryZoomContainer
          {...containerProps.zoom}
        />
      )
    case mainIXModeNames.J:
      return (
        <VictorySelectionContainer
          {...containerProps.selection}
        />
      )
    case mainIXModeNames.K:
      return (
        <VictoryBrushContainer
          {...containerProps.brush}
        />
      )
    default:
      return undefined
  }
}

export default InteractionContainerFactory
