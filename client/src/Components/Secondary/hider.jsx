import React from 'react';
import { Button } from 'reactstrap';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({ visibility: !this.state.visibility });
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <div id="BodyCSS" className="jumbotron">
            <h2>Hide Me.</h2>
            <Button onClick={this.toggleVisibility} lg color="warning">
              Create Account
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div id="BodyCSS" className="jumbotron">
          <Button onClick={this.toggleVisibility} lg color="warning">
            Create Account
          </Button>
        </div>
      </div>
    );
  }
}
