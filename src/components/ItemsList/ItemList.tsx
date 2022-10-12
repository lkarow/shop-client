import React from 'react';
import { Container } from 'react-bootstrap';

import ItemCard from '../ItemCard/ItemCard';

import './ItemList.scss';

type Props = {
  items: Item[];
};

type Item = {
  _id: string;
  Name: string;
  Brand: string;
  Price: number;
  ImagePath: string;
};

export default function ItemList({ items }: Props) {
  return (
    <Container fluid>
      <div className="list-wrapper">
        {items && items.map((item) => <ItemCard key={item._id} item={item} />)}
      </div>
    </Container>
  );
}
