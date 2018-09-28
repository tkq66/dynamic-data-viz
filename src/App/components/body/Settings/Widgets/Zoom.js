import React from 'react'
import Widget from './Prototype/Widget'
import Checkbox from '@material-ui/core/Checkbox'

const Zoom = () => (
  <Widget title="Zoom" body={
    <div className='ripple'>
      <Checkbox />
    </div>
  } />
)

export default Zoom
