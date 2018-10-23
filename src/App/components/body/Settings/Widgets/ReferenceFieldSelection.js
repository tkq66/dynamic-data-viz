import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Widget from './Prototype/Widget'

class ReferenceFieldSelection extends Component {
  constructor(props) {
    super(props)
    this.selectRefField = this.selectRefField.bind(this)
  }

  selectRefField(e) {
    this.props.action.setRefField(e.target.value)
  }

  render() {
    return (<Widget title="Select Reference Field" body={
      <FormControl>
        <Select value={this.props.state.referenceField}
                onChange={this.selectRefField}
                displayEmpty
                name="field">
          <MenuItem value="">
            <em>{this.props.state.fields.length === 0 ? "None" : "Choose"}</em>
          </MenuItem>
          {this.props.state.fields.map(field =>
            <MenuItem key={field} value={field}>{field}</MenuItem>
          )}
        </Select>
      </FormControl>}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferenceFieldSelection)
