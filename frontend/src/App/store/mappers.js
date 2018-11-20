import { actions, getData } from 'App/reducers/visSettings'

// gives our component access to state through props.<prop name>
export const mapStateToProps = state => ({
  state: {
    getData: getData(state.visSettings),
    data: state.visSettings.data,
    overviewData: state.visSettings.overviewData,
    referenceField: state.visSettings.referenceField,
    fields: state.visSettings.fields,
    trueFields: state.visSettings.trueFields,
    activeFields: state.visSettings.activeFields,
    mainIXMode: state.visSettings.interactionMode.main,
    overviewIXMode: state.visSettings.interactionMode.overview,
    cursorContext: state.visSettings.cursorContext,
    domain: state.visSettings.domain,
    entireDomain: state.visSettings.entireDomain,
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
    setDomain: (x, y, domainChangeMode) => dispatch(actions.setDomain(x, y, domainChangeMode)),
  }
})
