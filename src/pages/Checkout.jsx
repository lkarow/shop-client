import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import CheckoutCart from '../components/CheckoutCart/CheckoutCart';
import CheckoutTotal from '../components/CheckoutTotal/CheckoutTotal';
import CheckoutShipping from '../components/CheckoutShipping/CheckoutShipping';

import './Checkout.scss';

export default function Checkout({ itemsInCart, removeFromCart }) {
  const [shipping, setShipping] = useState(false);

  const handleClickToCheckout = () => {
    setShipping(true);
  };

  return (
    <Container className="mt-5 mb-5" fluid>
      <div className="checkout-container">
        <Row>
          <Col md={8}>
            <div className="checkout-steps">
              {!shipping ? (
                <CheckoutCart
                  itemsInCart={itemsInCart}
                  removeFromCart={removeFromCart}
                />
              ) : (
                shipping && <CheckoutShipping />
              )}
              <Link to={`/`}>
                <Button className="mt-4" size="lg">
                  Continue shopping
                </Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="checkout-summary">
              <CheckoutTotal
                itemsInCart={itemsInCart}
                handleClickToCheckout={handleClickToCheckout}
              />
              <Button
                onClick={handleClickToCheckout}
                className="checkout mt-4"
                size="lg"
                variant="warning"
              >
                Got to the checkout
              </Button>
              <Row>
                <span className="delivery-information mt-4">
                  All orders over 50.00 EUR free shipping
                </span>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
