import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ItemCard.scss';

export default function ItemCardView({ item, addToCart }) {
  const handleClick = () => {
    addToCart(item);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={item.ImagePath}
        className="card-img"
        alt="Item"
      />
      <Card.Body>
        <Card.Title>{item.Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.Brand}</Card.Subtitle>
        <Card.Text>{item.Price} €</Card.Text>
        <Button onClick={handleClick} variant="primary">
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}
