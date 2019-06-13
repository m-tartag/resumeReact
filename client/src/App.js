import React, { Component } from 'react';
import { Navigation, Body, Foot } from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <Navigation />
        <Body />
        <Foot />
      </div>
    );
  }
}
export default App;
