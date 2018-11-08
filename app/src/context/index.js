import React, { useState } from 'react'
import eventEmitter from '../event'

const ThemeContext = React.createContext({})
const UserContext = React.createContext({})

let appCtrl = null

const setupAppControllerContext = (ctrl) => {
  appCtrl = ctrl
  window.appCtrl = appCtrl
}

class CtxProvider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {...appCtrl}
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount () {
    eventEmitter.on('changeAppCtrl', this.updateState)
  }

  updateState (mutation = {oldState: null, newState: null}) {
    this.setState({...appCtrl})
  }

  render () {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state}>
          {/* <UserContext.Provider value={this.state.user}> */}
          {this.props.children}
          {/* </UserContext.Provider> */}
        </ThemeContext.Provider>
      </React.Fragment>
    )
  }
}

let queryDefault = (c) => {
  return null
}

let withConsumer = (MyComponent, queryStore = queryDefault) => {
  class ContextWrapper extends React.PureComponent {
    render () {
      return (
        <ThemeContext.Consumer>
          {(store) => {
            let myprops = {}
            if (queryStore) myprops = queryStore(store)
            return <MyComponent {...this.props} {...myprops} />
          }}
        </ThemeContext.Consumer>
      )
    }
  }

  return ContextWrapper
}

let renderUserConsumer = (MyComponent, queryStore = queryDefault) => {
  class ContextWrapperUser extends React.PureComponent {
    render () {
      return (
        <UserContext.Consumer>
          {(store) => {
            let myprops = {}
            if (queryStore) myprops = queryStore(store)
            return <MyComponent {...this.props} {...myprops} />
          }}
        </UserContext.Consumer>
      )
    }
  }

  return ContextWrapperUser
}

export { setupAppControllerContext, CtxProvider, withConsumer, renderUserConsumer }
