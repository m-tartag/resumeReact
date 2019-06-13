import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Navigation,
  Body,
  Foot,
  Login,
  Register,
  Buy,
  Sell,
} from './components/Main';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Route exact path="/" component={Body} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/sell" component={Sell} />
        </Switch>
      </section>
      <Foot />
    </Fragment>
  </Router>
);

export default App;
