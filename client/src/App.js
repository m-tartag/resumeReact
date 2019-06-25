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
  Header,
  Landing,
} from './components/Main';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/sell" component={Sell} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
