import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { CtxProvider } from './context'

ReactDOM.render(<CtxProvider><App /></CtxProvider>, document.getElementById('app'))

