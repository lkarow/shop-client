import React from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CartView.scss';

export default function CartView({
  cartIsOpen,
  showCart,
  itemsInCart,
  removeFromCart,
}) {
  const handleClick = (item) => {
    removeFromCart(item);
  };

  return (
    <Offcanvas show={cartIsOpen} onHide={showCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {!itemsInCart.length ? (
          <div>Your shopping cart is empty.</div>
        ) : (
          itemsInCart.map((item) => (
            <Row key={item._id} className="mt-3">
              <Col>
                <img src={item.ImagePath} className="cart-img" alt="Item" />
              </Col>
              <Col>{item.Name}</Col>
              <Col>
                <Button onClick={() => handleClick(item)} variant="danger">
                  Remove
                </Button>
              </Col>
            </Row>
          ))
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
