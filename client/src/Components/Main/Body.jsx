import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to CompuShop',
    };
  }

  render() {
    return (
      <div>
        <div id="BodyCSS" className="jumbotron">
          <div className="bg-image" />

          <div className="bg-text">
            <h2>{this.state.title}</h2>
            <h1 style={{ fontSize: '50px' }}>Buy/Sell Used Computer Parts</h1>
            <p />
            <Button tag={Link} to="/Register" outline color="success">
              New User
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button tag={Link} to="/Login" outline color="warning">
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
