import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { sum, deliveryCost, total } from '../../utility/utility';

import './CheckoutTotal.scss';

export default function CheckoutTotal({ itemsInCart }) {
  const displaySum = () => {
    if (itemsInCart) return sum(itemsInCart);
  };

  const displayDeliveryCost = () => {
    if (itemsInCart) return deliveryCost(itemsInCart);
  };

  const displayTotal = () => {
    if (itemsInCart) return total(itemsInCart);
  };

  return (
    <>
      <h2>Total</h2>
      <div className="checkout-total">
        <Row>
          <Col>
            <span>Subtotal</span>
          </Col>
          <Col>
            <span className="float-end">{displaySum()} €</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Delivery</span>
          </Col>
          <Col>
            <span className="float-end">{displayDeliveryCost()} €</span>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <span className="strong">Total (VAT included)</span>
          </Col>
          <Col>
            <span className="strong float-end">{displayTotal()} €</span>
          </Col>
        </Row>
      </div>
    </>
  );
}
