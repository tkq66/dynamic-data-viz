import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from '@material-ui/core/Chip'
import Input from '@material-ui/core/Input'
import Widget from './Prototype/Widget'

const Chips = styled.div `
  display: flex;
  flex-wrap: wrap;
`

class SelectActiveFields extends Component {
  constructor(props) {
    super(props)
    this.selectActiveFields = this.selectActiveFields.bind(this)
  }

  selectActiveFields(e) {
    this.props.action.setActiveFields(e.target.value)
  }

  render() {
    return (<Widget title="Select Active Field" body={
      <FormControl>
        <Select multiple
                value={this.props.state.activeFields.map(f => f.name)}
                onChange={this.selectActiveFields}
                input={<Input id="select-multiple-chip" />}
                displayEmpty
                name="field"
                renderValue={selected => (
                  <Chips>
                    {selected.map(value => (
                      <Chip key={value} label={value} />
                    ))}
                  </Chips>
                )}>
          {this.props.state.trueFields.map(field =>
            <MenuItem key={field.name} value={field.name}>{field.name}</MenuItem>
          )}
        </Select>
      </FormControl>}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectActiveFields)
