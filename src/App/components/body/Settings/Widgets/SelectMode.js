import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import {modeIndexReference} from 'App/reducers/visSettings'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Widget from './Prototype/Widget'

class SelectMode extends Component {
  constructor(props) {
    super(props)
    this.selectMode = this.selectMode.bind(this)
  }

  selectMode(e) {
    console.log(e.target.value)
  }

  render() {
    return (<Widget title="Select Mode" body={
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="mode"
          name="mode-select"
          value={this.props.state.modeName}
          onChange={this.selectMode}
        >
          {Object.keys(modeIndexReference).map(m => (
            <FormControlLabel
              key={m}
              value={m}
              control={<Radio color="primary" />}
              label={m}
              labelPlacement="start"
            />
          ))}
        </RadioGroup>
      </FormControl>
    } />)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMode)
