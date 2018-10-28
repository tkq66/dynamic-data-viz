import { actions } from 'App/reducers/visSettings.js'

// gives our component access to state through props.<prop name>
export const mapStateToProps = state => ({
  state: {
    data: state.visSettings.data,
    referenceField: state.visSettings.referenceField,
    fields: state.visSettings.fields,
    trueFields: state.visSettings.trueFields,
    activeFields: state.visSettings.activeFields,
    mainIXMode: state.visSettings.interactionMode.main,
    overviewIXMode: state.visSettings.interactionMode.overview,
    cursorContext: state.visSettings.cursorContext,
    domain: state.visSettings.domain,
  }
})

// here we're mapping actions to props
export const mapDispatchToProps = dispatch => ({
  action: {
    setData: (data, fields) => dispatch(actions.setData(data, fields)),
    setRefField: field => dispatch(actions.setRefField(field)),
    setActiveFields: fields => dispatch(actions.setActiveFields(fields)),
    setModeMain: modeName => dispatch(actions.setModeMain(modeName)),
    setModeOverview: modeName => dispatch(actions.setModeOverview(modeName)),
    setCursor: cursorValue => dispatch(actions.setCursor(cursorValue)),
    setDomain: (x, y) => dispatch(actions.setDomain(x, y)),
  }
})
