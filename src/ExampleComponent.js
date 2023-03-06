import React, { Component } from 'react'

export default class ExampleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <p>You've clicked the button {this.state.count} times.</p>
      </div>
    )
  }
}
