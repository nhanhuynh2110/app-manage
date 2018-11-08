import React from 'react'
import { withConsumer, renderUserConsumer } from '../context'

class Test extends React.PureComponent {
  handleClick () {
    this.props.store.fn.setCurrentNav((old) => {
      old.push('huynh')
      return old
    })
  }
  render () {
    return (
      <React.Fragment>
        <ul>{this.props.store.data.currentNav.map((e, key) => <li key={key}><a>{e}</a></li>)}</ul>
        <div><button onClick={this.handleClick.bind(this)}>user</button></div>
      </React.Fragment>

    )
  }
}

export default withConsumer(Test, (store) => ({
  store: store
}))
