import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
       <div>
          <div className="count"> Count: {this.state.count}</div>
          <button onClick={this.increment}> Increment </button>
          <button onClick={this.decrement}> Decrement </button>
       </div>
    );
  }
}

export default App;
