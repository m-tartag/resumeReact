import React from 'react';
import {} from 'reactstrap';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {};
  }

  //   toggle() {
  //     this.setState({

  //     });
  //   }

  render() {
    return (
      <div>
        <div id="BodyCSS" className="jumbotron">
          <h1>Hello</h1>
          <h4>Get started..</h4>
        </div>
      </div>
    );
  }
}
