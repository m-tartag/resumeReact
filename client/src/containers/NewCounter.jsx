import React, { Component } from 'react';

class Testing extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="counter">{this.state.count}</div>
        <button type="button" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Testing;
