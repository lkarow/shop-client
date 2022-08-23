import React from 'react';
import { Container } from 'react-bootstrap';

import ItemCard from '../ItemCard/ItemCard';

import './ItemList.scss';

export default function ItemList({ items, addToCart }) {
  return (
    <Container fluid>
      <div className="list-wrapper">
        {items &&
          items.map((item) => (
            <ItemCard key={item._id} item={item} addToCart={addToCart} />
          ))}
      </div>
    </Container>
  );
}
