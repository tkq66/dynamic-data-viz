import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import visSettings from '../reducers/visSettings'

// const loggerMiddleware = createLogger() // initialize logger
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,  // lets us dispatch() functions
  // loggerMiddleware
)(createStore)

const rootReducer = combineReducers({
  visSettings
})

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer)
}
