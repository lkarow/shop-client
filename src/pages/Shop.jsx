import React from 'react';
import { Container } from 'react-bootstrap';

import ItemsList from '../components/ItemsList/ItemList';

export default function Shop({ items, addToCart }) {
  return (
    <Container fluid>
      <h1>Shop</h1>
      <ItemsList items={items} addToCart={addToCart} />
    </Container>
  );
}
