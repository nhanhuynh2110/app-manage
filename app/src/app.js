import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { withConsumer } from './context'
import Test from './component/test'

class App extends React.PureComponent {
  buildPages () {
    return [
      { path: '/', exact: true, key: 'home', render: () => <Test /> },
      { path: '/category', exact: true, key: 'home', render: () => <div>Category page</div> }
    ]
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <ul>
              <li><NavLink to='/' className='normal' activeClassName='active' exact>home</NavLink></li>
              <li><NavLink to='/category' className='normal' activeClassName='active' exact>category</NavLink></li>
            </ul>
            <Switch>
              {this.buildPages().map((route) => <Route {...route} />)}
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>

    )
  }
}

export default withConsumer(App, (store) => ({
  store: store
}))
