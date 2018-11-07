import React from 'react'
import { renderThemeConsumer, renderUserConsumer } from '../context'

class Test extends React.PureComponent {
  render () {
    return (
      <div>user</div>
    )
  }
}

let User = renderThemeConsumer(Test, (store) => ({ theme: store.theme }))
export default renderUserConsumer(User, (u) => ({
  user: u
}))
