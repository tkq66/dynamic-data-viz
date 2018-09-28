import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import Widget from './Prototype/Widget'
import Papa from 'papaparse'

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.data = { values: [] }
    this.fileUpload = this.fileUpload.bind(this)
    this.appendData = this.appendData.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  fileUpload(e) {
    Papa.parse(e.target.files[0], {
      header: true,
      step: this.appendData,
      complete: this.handleFile
    })
  }

  appendData(row) {
    let data = row.data[0]
    for (let field in data) {
      if (field === "date" ||
          data[field] === "") {
        continue
      }
      this.data.values.push({
        date: data["date"],
        price: data[field],
        symbol: field
      })
    }
  }

  handleFile(e) {
    this.props.action.setEncoding({
      x: {
        field: "date",
        type: "temporal",
        "timeUnit": "utcyearmonthdate"
      },
      y: {
        field: "price",
        type: "quantitative"
      },
      color: {
        field: "symbol",
        type: "nominal"
      }
    })
    this.props.action.setData(this.data)
  }

  render() {
    return (
      <Widget title="File Upload" body={
        <input type="file" id="file-upload-input" onChange={this.fileUpload} />
      } />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload)
