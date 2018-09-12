import { connect } from 'react-redux'
import Settings from './Settings'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
