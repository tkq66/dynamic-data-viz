import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import {interactionModeRef} from 'App/reducers/visSettings'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Widget from './Prototype/Widget'

class SelectMainMode extends Component {
  constructor(props) {
    super(props)
    this.selectMode = this.selectMode.bind(this)
  }

  selectMode(e) {
    this.props.action.setMode(e.target.value)
  }

  render() {
    return (<Widget title="Main View Mode" body={
      <FormControl>
        <Select value={this.props.state.interactionMode.value}
                onChange={this.selectMode}>
          {Object.keys(interactionModeRef).map(m =>
            <MenuItem key={interactionModeRef[m].value}
                      value={interactionModeRef[m].value}>
                      {interactionModeRef[m].detail}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    } />)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMainMode)
