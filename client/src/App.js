import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import Testing from './containers/Testing';
import ContactCard from './containers/SandBox/ContactCard';
// import { Header, Foot, Login } from './Layouts/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Testing />
      </div>
    );
  }
}
export default App;
