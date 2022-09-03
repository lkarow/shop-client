import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { getItem } from '../api/items';

import './Item.scss';

export default function Item({ addToCart }) {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [size, setSize] = useState(null);

  useEffect(() => {
    getItem(itemId).then((response) => setItem(response));
  }, []);

  // Select size
  const selectSize = (e) => {
    setSize(e.target.innerHTML);
  };

  const handleClick = () => {
    addToCart(item, size);
    setSize(null);
  };

  const handleClickSize = (e) => {
    e.preventDefault();
    selectSize(e);
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
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              36
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              37
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              38
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              39
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              40
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              41
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              42
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              43
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              44
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              45
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              46
            </Button>
            <Button
              className="btn-size"
              variant="outline-secondary"
              onClick={handleClickSize}
            >
              47
            </Button>
          </div>
          <div className="d-grid gap-2">
            <Button
              onClick={handleClick}
              className="mt-5"
              size="lg"
              disabled={size === null ? true : false}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
