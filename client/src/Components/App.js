import React, { Component } from 'react';
import { Header, Foot, Body, Login } from './Layouts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
          <Login />
          <Foot />
        </React.Fragment>
      </div>
    );
  }
}
export default App;
