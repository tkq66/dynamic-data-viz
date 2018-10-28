import React from 'react'
import {overviewIXModeNames} from 'App/reducers/visSettings'
import {createContainer} from 'victory'

const BrushCursorContainer = createContainer("brush", "cursor")

const InteractionContainerFactory = (modeName,
                                     internalFieldNameKey,
                                     cursorContext,
                                     brushContext) => {
  switch (modeName) {
    case overviewIXModeNames.X:
      return (
        <BrushCursorContainer
          brushDimension="x"
          cursorDimension="x"
          cursorLabel={(d) => `${ (
            !d.x
            ? new Date()
            : d.x instanceof Date
              ? d.x
              : new Date(d.x)).toLocaleDateString("en-GB")}`}
          {...cursorContext}
          {...brushContext}
        />
      )
    case overviewIXModeNames.Y:
      return (
        <BrushCursorContainer
          brushDimension="y"
          cursorDimension="y"
          cursorLabel={(d) => `${d.y}`}
          {...cursorContext}
          {...brushContext}
        />
      )
    default:
      return undefined
  }
}

  export default InteractionContainerFactory
