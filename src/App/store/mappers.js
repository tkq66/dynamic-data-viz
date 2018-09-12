import { actions } from 'App/reducers/visSettings.js'

// gives our component access to state through props.<prop name>
export const mapStateToProps = state => ({
  state: {
      spec: state.visSettings.spec
  }
})

// here we're mapping actions to props
export const mapDispatchToProps = dispatch => ({
  action: {
    setDefault: () => dispatch(actions.setDefault()),
    modifyParams: newParams => dispatch(actions.modifyParams(newParams))
  }
})
