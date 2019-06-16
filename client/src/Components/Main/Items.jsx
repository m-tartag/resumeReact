import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Items = props => (
  <div>
    <Card
      style={{
        border: 'solid 2px',
        margin: '20px',
        backgroundColor: 'lightgrey',
      }}
    >
      <CardImg top width="100%" src="" alt="Image" />
      <CardBody>
        <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>
          Computer Part
        </CardTitle>
        <p style={{ color: 'green' }}>Posted On: {Date()}</p>
        <CardSubtitle>Condition: Like New</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content.
        </CardText>
        <Button color="warning">More Info</Button>{' '}
        <Button disabled color="success">
          Available
        </Button>{' '}
        <Button disabled color="primary">
          Free Shipping
        </Button>
      </CardBody>
    </Card>
  </div>
);

export default Items;
