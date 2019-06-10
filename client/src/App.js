import React, { Component } from 'react';

import { Navigation, Body, Foot } from './components/Main';
// import { SearchBar } from './components/Secondary';
import { Login, NewCounter } from './containers/SandBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <Navigation />
        <Body />
        <NewCounter />
        {/* <Foot /> */}
        <Login />
      </div>
    );
  }
}
export default App;
