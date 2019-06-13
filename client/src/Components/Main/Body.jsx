import React from 'react';
import { Button } from 'reactstrap';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: `Welcome to CompuShop. Buy/Sell Used PC Parts.`,
    };
  }

  render() {
    return (
      <div>
        <div id="BodyCSS" className="jumbotron">
          <h2>{this.state.intro}</h2>
          <Button lg outline color="success">
            Log-In
          </Button>
          {''}
          <Button lg outline color="warning" />
        </div>
      </div>
    );
  }
}
