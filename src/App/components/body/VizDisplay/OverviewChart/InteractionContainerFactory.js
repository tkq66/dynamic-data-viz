import React from 'react'
import { createContainer } from 'victory'

const BrushCursorContainer = createContainer("brush", "cursor")

const InteractionContainerFactory = (internalFieldNameKey,
                                     cursorContext,
                                     brushContext) => {
  return (
    <BrushCursorContainer
      brushDimension="x"
      cursorDimension="x"
      cursorLabel={(d) => `${(!d.x ? new Date() : d.x instanceof Date ? d.x : new Date(d.x)).toLocaleDateString("en-GB")}`}
      {...cursorContext}
      {...brushContext}
    />
  )
}

export default InteractionContainerFactory
