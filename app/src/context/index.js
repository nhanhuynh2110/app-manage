import React, { useState } from 'react'
import {themes, dfData} from './ctrlData'

const ThemeContext = React.createContext({})
const UserContext = React.createContext({})

class CtxProvider extends React.Component {
  constructor (props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }))
    }
    this.state = {
      user: {
        name: 'nhan',
        age: 19
      },
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }

  render () {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state}>
          <UserContext.Provider value={this.state.user}>
          {this.props.children}
          </UserContext.Provider>
        </ThemeContext.Provider>
      </React.Fragment>
    )
  }
}

let queryDefault = (c) => {
  return null
}

let renderThemeConsumer = (MyComponent, queryStore = queryDefault) => {
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
      )}
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
      )}
  }

  return ContextWrapperUser
}

export { CtxProvider, renderThemeConsumer, renderUserConsumer }
