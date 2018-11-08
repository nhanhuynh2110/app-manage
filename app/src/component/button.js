import React from 'react'
import { withConsumer } from '../context'

class But extends React.PureComponent {
  render () {
    return (
      <button
        onClick={this.props.toggleTheme}
        style={{backgroundColor: this.props.theme.background}}>
        Toggle Theme
      </button>
    )
  }
}
export default withConsumer(But, (store) => ({
  theme: store.theme,
  toggleTheme: store.toggleTheme
}))
