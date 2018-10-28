import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Widget from './Prototype/Widget'

class SelectReferenceField extends Component {
  constructor(props) {
    super(props)
    this.selectRefField = this.selectRefField.bind(this)
  }

  selectRefField(e) {
    this.props.action.setRefField(e.target.value)
  }

  render() {
    return (<Widget last={this.props.last} title="Select Reference Field" body={
      <FormControl>
        <Select value={this.props.state.referenceField}
                onChange={this.selectRefField}
                displayEmpty
                name="field">
          <MenuItem value="">
            <em>{this.props.state.fields.length === 0 ? "None" : "Choose"}</em>
          </MenuItem>
          {this.props.state.fields.map(field =>
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
)(SelectReferenceField)
