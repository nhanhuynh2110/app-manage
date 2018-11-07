import React from 'react'
import { renderThemeConsumer } from '../context'

class But extends React.PureComponent {
  render () {
    console.log('props', this.props)
    return (
      <button
        onClick={this.props.toggleTheme}
        style={{backgroundColor: this.props.theme.background}}>
        Toggle Theme
      </button>
    )
  }
}
export default renderThemeConsumer(But, (store) => ({
  theme: store.theme,
  toggleTheme: store.toggleTheme
}))
// export default renderConsumer(But, (store) => ({
//   theme: store.theme,
//   toggleTheme: store.toggleTheme
// }))
