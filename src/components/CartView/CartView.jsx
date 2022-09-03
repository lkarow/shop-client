import React from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import deleteIcon from '../../assets/img/delete-icon.svg';
import './CartView.scss';

import { sum } from '../../utility/utility';

export default function CartView({
  cartIsOpen,
  showCart,
  itemsInCart,
  removeFromCart,
}) {
  const handleClick = (item) => {
    removeFromCart(item);
  };

  const displaySum = () => {
    if (itemsInCart) return sum(itemsInCart);
  };

  return (
    <Offcanvas
      id="offcanvas-cart"
      show={cartIsOpen}
      onHide={showCart}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {!itemsInCart.length ? (
          <div>Your shopping cart is empty.</div>
        ) : (
          itemsInCart.map((item) => (
            <Row key={item.item._id + item.size} className="mt-3">
              <Col md="auto">
                <img
                  src={item.item.ImagePath}
                  className="cart-img"
                  alt="Item"
                />
              </Col>
              <Col md="auto">{item.amount} x</Col>
              <Col md={3}>{item.item.Name}</Col>
              <Col md="auto">{item.size}</Col>
              <Col md={2}>{item.item.Price} €</Col>
              <Col md="auto">
                <img
                  onClick={() => handleClick(item)}
                  src={deleteIcon}
                  className="delete-icon"
                  alt="Delete"
                />
              </Col>
            </Row>
          ))
        )}
        {!itemsInCart.length ? null : (
          <Row>
            <Col className="sum mt-4">Sum: {displaySum()} €</Col>
          </Row>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
