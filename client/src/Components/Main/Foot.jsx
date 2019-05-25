import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class Foot extends Component {
  render() {
    return (
      <footer id="FootCSS">
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4">
            <p>___</p>
          </Col>
          <Col sm="4" />
        </Row>
      </footer>
    );
  }
}
