import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import CheckoutCart from '../components/CheckoutCart/CheckoutCart';
import CheckoutTotal from '../components/CheckoutTotal/CheckoutTotal';

import './Checkout.scss';

export default function Checkout({ itemsInCart, removeFromCart }) {
  return (
    <Container className="mt-5 mb-5" fluid>
      <div className="checkout-container">
        <Row>
          <Col md={8}>
            <div className="checkout-steps">
              <CheckoutCart
                itemsInCart={itemsInCart}
                removeFromCart={removeFromCart}
              />
              <Link to={`/`}>
                <Button className="mt-4" size="lg">
                  Continue shopping
                </Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="checkout-summary">
              <CheckoutTotal itemsInCart={itemsInCart} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
