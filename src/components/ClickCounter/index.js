// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onCounter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <div className="box">
          <h1 className="head">
            The Button has been clicked <span className="count">{count}</span>{' '}
            times
          </h1>
          <p className="data">click the button to increase the count</p>
          <button type="button" className="button" onClick={this.onCounter}>
            click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
