import { actions } from 'App/reducers/visSettings.js'

// gives our component access to state through props.<prop name>
export const mapStateToProps = state => ({
  state: {
    data: state.visSettings.data,
    spec: state.visSettings.spec
  }
})

// here we're mapping actions to props
export const mapDispatchToProps = dispatch => ({
  action: {
    setData: data => dispatch(actions.setData(data)),
    setDefault: () => dispatch(actions.setDefault()),
    setSize: (width, height) => dispatch(actions.setSize(width, height)),
    modifyParams: newParams => dispatch(actions.modifyParams(newParams))
  }
})
