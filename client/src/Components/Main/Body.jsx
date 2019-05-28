import React from 'react';
import { Button } from 'reactstrap';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = { styleOne: {}, styleTwo: {} };
  }

  //   toggle() {
  //     this.setState({

  //     });
  //   }

  render() {
    return (
      <div>
        <div id="BodyCSS" className="jumbotron">
          {/* <h2>Open your mind.</h2>
          <Button lg color="warning">
            Create Account
          </Button> */}
        </div>
      </div>
    );
  }
}
