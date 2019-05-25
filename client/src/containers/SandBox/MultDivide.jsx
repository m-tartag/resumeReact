import React, { Component } from 'react';

class Testing extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.divClick = this.divClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count * 2,
    }));
  }

  divClick() {
    this.setState(prevState => ({
      count: prevState.count / 2,
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="counter">{this.state.count}</div>
        <button type="button" onClick={this.handleClick}>
          Click me
        </button>
        <button type="button" onClick={this.divClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Testing;
