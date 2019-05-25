import React, { Component } from 'react';

class Testing extends Component {
  constructor() {
    super();
    this.state = {
      online: true,
      name: 'George',
      age: 33,
      count: 0,
    };
    this.countMethod = this.countMethod.bind(this);
  }

  countMethod() {
    this.setState(prevState => ({
      count: this.prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className="container main">
        <img
          onFocus=""
          onMouseOver={() => console.log('Hovered')}
          src="https://www.fillmurray.com/300/300"
          alt=""
        />
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old.</h3>
        <h4>{this.state.online == true ? 'Online' : 'Offline'}</h4>
        <button type="button" onClick={() => console.log('Hello')}>
          Click Me
        </button>
        <br />
        <br />
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.countMethod}>
          Counter
        </button>
      </div>
    );
  }
}

export default Testing;
