import React, { Component } from 'react'
import Papa from 'papaparse'

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.fileUpload = this.fileUpload.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleFile(e) {
    console.log(e.data)
  }

  fileUpload(e) {
    Papa.parse(e.target.files[0], {
    	complete: this.handleFile
    })
  }

  render() {
    return (
      <input type="file" id="file-upload-input" onChange={this.fileUpload} />
    )
  }
}

export default FileUpload
