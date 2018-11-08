import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { CtxProvider, setupAppControllerContext } from './context'
import Controller from './controller'

function startApp () {
  let appCtrl = new Controller()
  setupAppControllerContext(appCtrl)
  appCtrl.runApplication(() => ReactDOM.render(<CtxProvider><App /></CtxProvider>, document.getElementById('app')))
}
startApp()

