import React, { Component } from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div id="LoginCSS">
          <div className="bg-image3" />
          <div className="bg-text3">
            <Container className="App">
              <h2>Sign In</h2>
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>
                </Col>
                <Button color="warning">Submit</Button>
              </Form>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
