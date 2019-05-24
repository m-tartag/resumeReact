import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import Testing from './containers/Testing';
import ContactCard from './containers/SandBox/ContactCard';
// import { Header, Foot, Login } from './Layouts/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container contacts">
        <ContactCard
          contact={{
            name: 'KittyBoi',
            imgUrl: 'http://placekitten.com/400/200',
            phone: '555-5555',
            email: 'meowemwo@meowme.com',
          }}
        />
        <ContactCard
          contact={{
            name: 'Chester',
            imgUrl: 'http://placekitten.com/300/200',
            phone: '555-5555',
            email: 'meowemwo@meowme.com',
          }}
        />
        <ContactCard
          contact={{
            name: 'Rexxxxx',
            imgUrl: 'http://placekitten.com/400/300',
            phone: '555-5555',
            email: 'meowemwo@meowme.com',
          }}
        />
        <ContactCard
          contact={{
            name: 'Sloppy',
            imgUrl: 'http://placekitten.com/200/100',
            phone: '555-5555',
            email: 'meowemwo@meowme.com',
          }}
        />
      </div>
    );
  }
}
export default App;
