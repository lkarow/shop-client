import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { getItem } from '../api/items';

import './Item.scss';

export default function Item({ addToCart }) {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem(itemId).then((response) => setItem(response));
  }, []);

  const handleClick = () => {
    addToCart(item);
  };

  return (
    <Container className="mt-5 mb-5" fluid>
      <div className="item">
        <img src={item.ImagePath} className="item-img" alt="Item" />
        <div className="item-description">
          <span>{item.Brand}</span>
          <h1>{item.Name}</h1>
          <span className="item-price">{item.Price} €</span>
          <div className="item-size mt-3">
            <Button className="btn-size" variant="outline-secondary">
              36
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              37
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              38
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              39
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              40
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              41
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              42
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              43
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              44
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              45
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              46
            </Button>
            <Button className="btn-size" variant="outline-secondary">
              47
            </Button>
          </div>
          <Button onClick={handleClick} className="mt-5" size="lg">
            Add to cart
          </Button>
        </div>
      </div>
    </Container>
  );
}
