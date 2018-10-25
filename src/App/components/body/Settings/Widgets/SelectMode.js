import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import {interactionModeRef} from 'App/reducers/visSettings'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Widget from './Prototype/Widget'

const RadioGroupSpan = styled(RadioGroup) `
  display: flex
  flex-direction: row !important
  flex-wrap: wrap !important
`

class SelectMode extends Component {
  constructor(props) {
    super(props)
    this.selectMode = this.selectMode.bind(this)
  }

  selectMode(e) {
    console.log(e.target.value)
    this.props.action.setMode(e.target.value)
  }

  render() {
    return (<Widget title="Select Mode" body={
      <FormControl component="fieldset">
        <RadioGroupSpan
          aria-label="mode"
          name="mode-select"
          value={this.props.state.interactionMode.value}
          onChange={this.selectMode}
        >
          {Object.keys(interactionModeRef).map(m => (
            <FormControlLabel
              key={interactionModeRef[m].value}
              value={interactionModeRef[m].value}
              control={<Radio color="primary" />}
              label={interactionModeRef[m].label}
              labelPlacement="start"
            />
          ))}
        </RadioGroupSpan>
      </FormControl>
    } />)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMode)
