import React from 'react';
import { Container } from 'react-bootstrap';

import ItemsList from '../components/ItemsList/ItemList';

export default function Shop({ items }) {
  return (
    <Container className="mt-5 mb-5" fluid>
      <ItemsList items={items} />
    </Container>
  );
}
