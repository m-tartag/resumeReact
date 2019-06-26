import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = props => (
  <div>
    <Jumbotron style={{ height: '800px' }} id="Landing">
      <h1 className="display-4">Welcome</h1>
      <p className="lead">
        Resume 2.0 is a revolutionary new way to showcase hard work with the
        click of a button!
      </p>
      <hr className="my-2" />
      <p>
        Create dynamic resumes on a platform capabale of reaching the masses.
        Get hired faster!
      </p>
      <hr className="my-2" />
      <p style={{ fontSize: '12px', fontWeight: 'bold', color: 'red' }}>
        Coming Soon: Business/Employer Account Functionality
      </p>
      <p className="lead">
        <Button color="success">Try it!</Button>
      </p>
    </Jumbotron>
  </div>
);

export default Example;
