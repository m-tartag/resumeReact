import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Body, Foot } from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Body />
        <Foot />
      </div>
    );
  }
}
export default App;
