import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// import { calculateFn, info, obj, configPage } from './reducer'
import App from './app'
import './common.scss'

// let store = createStore(combineReducers({
//   calculate: calculateFn,
//   users: info,
//   obj: obj,
//   config: configPage
// }))


let store = {}

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('app')
)
