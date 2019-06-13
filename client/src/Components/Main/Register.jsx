import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Register extends Component {
  render() {
    return (
      <div id="RegisterCSS" className="jumbotron">
        <div className="bg-image2" />
        <div className="bg-text2">
          <h2>Create Account</h2>
          <div>
            <input style={{ margin: '5px' }} placeholder="Name" type="text" />{' '}
          </div>
          <div>
            <input style={{ margin: '5px' }} placeholder="Email" type="text" />{' '}
          </div>
          <div>
            <input
              style={{ margin: '5px' }}
              placeholder="Password"
              type="text"
            />{' '}
          </div>
          <input
            style={{ margin: '5px' }}
            placeholder="Re-Type Password"
            type="text"
          />
          <div>
            <Button
              style={{ margin: '20px' }}
              tag={Link}
              to="#"
              outline
              color="success"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
