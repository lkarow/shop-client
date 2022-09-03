import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './ItemCard.scss';

export default function ItemCardView({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/items/${item._id}`}>
        <Card.Img
          variant="top"
          src={item.ImagePath}
          className="card-img"
          alt="Item"
        />
      </Link>
      <Card.Body>
        <Card.Title>{item.Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.Brand}</Card.Subtitle>
        <Card.Text>{item.Price} €</Card.Text>
        <Link to={`/items/${item._id}`}>
          <Button variant="primary">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
