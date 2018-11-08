import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Widget from './Widget'

const SelectMode = props => (
  <Widget last={props.last} title={props.title} body={
    <FormControl>
      <Select value={props.currentMode}
              onChange={props.onModeChange}>
        {Object.keys(props.modeReference).map(m =>
          <MenuItem key={props.modeReference[m].value}
                    value={props.modeReference[m].value}>
                    {props.modeReference[m].detail}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  } />
)

export default SelectMode
