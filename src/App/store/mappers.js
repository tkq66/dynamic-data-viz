import { actions } from 'App/reducers/visSettings.js'

// gives our component access to state through props.<prop name>
export const mapStateToProps = state => ({
  state: {
    data: state.visSettings.data,
    referenceField: state.visSettings.referenceField,
    fields: state.visSettings.fields,
    trueFields: state.visSettings.trueFields,
    activeFields: state.visSettings.activeFields
  }
})

// here we're mapping actions to props
export const mapDispatchToProps = dispatch => ({
  action: {
    setData: (data, fields) => dispatch(actions.setData(data, fields)),
    setRefField: field => dispatch(actions.setRefField(field)),
    setActiveFields: fields => dispatch(actions.setActiveFields(fields))
  }
})
