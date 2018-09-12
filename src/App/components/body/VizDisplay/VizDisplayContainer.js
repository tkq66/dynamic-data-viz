import { connect } from 'react-redux'
import VizDisplay from './VizDisplay'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VizDisplay)
