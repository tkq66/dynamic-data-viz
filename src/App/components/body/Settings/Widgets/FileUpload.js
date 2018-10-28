import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import Widget from './Prototype/Widget'
import Papa from 'papaparse'
import Input from '@material-ui/core/Input'

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.fileUpload = this.fileUpload.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  fileUpload(e) {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: this.handleFile
    })
  }

  handleFile(e) {
    if (e.errors.length > 0) {
      console.error("Error parsing CSV file: ")
      console.log(e.errors)
      return
    }
    this.props.action.setData(e.data, e.meta.fields)
  }

  render() {
    return (
      <Widget last={this.props.last} title="File Upload" body={
        <Input type="file" id="file-upload-input" onChange={this.fileUpload} />
      } />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload)
