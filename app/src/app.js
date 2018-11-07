import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  buildPages () {
    return [
      { path: '/', exact: true, key: 'home', render: () => <div>Home page</div> }
    ]
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {this.buildPages().map((route) => <Route {...route} />)}
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App
