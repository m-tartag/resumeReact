import React, { Component } from 'react';

class Testing extends Component {
  constructor() {
    super();
    this.state = {
      online: true,
      name: 'George',
      age: 33,
    };
  }

  render() {
    return (
      <div className="container main">
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old.</h3>
        <h4>{this.state.online == true ? 'Online' : 'Offline'}</h4>
      </div>
    );
  }
}

export default Testing;
