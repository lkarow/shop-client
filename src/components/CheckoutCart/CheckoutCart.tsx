import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CheckoutCart.scss';

const deleteIcon = require('../../assets/img/delete-icon.svg') as string;

type Props = {
  itemsInCart: CartItem[];
  removeFromCart: any;
};

type CartItem = {
  item: Item;
  amount: number;
  size: string;
};

type Item = {
  _id: string;
  Name: string;
  Brand: string;
  Price: number;
  ImagePath: string;
};

export default function CheckoutCart({ itemsInCart, removeFromCart }: Props) {
  const handleClick = (item: CartItem) => {
    removeFromCart(item);
  };

  return (
    <>
      <h2 className="heading">Shopping cart</h2>
      {!itemsInCart.length ? (
        <div>Your shopping cart is empty.</div>
      ) : (
        itemsInCart.map((item) => (
          <Row key={item.item._id + item.size} className="mt-3">
            <Col md="auto">
              <img
                src={item.item.ImagePath}
                className="checkout-cart-img"
                alt="Item"
              />
            </Col>
            <Col md={6}>
              <p className="checkout-item-name">{item.item.Name}</p>
              <p>Size: {item.size}</p>
              <p className="checkout-size">Amount: {item.amount}</p>
              <img
                onClick={() => handleClick(item)}
                src={deleteIcon}
                className="checkout-delete-icon"
                alt="Delete"
              />
            </Col>
            <Col md={2} className="checkout-item-price">
              <span className="float-end">{item.item.Price} €</span>
            </Col>
          </Row>
        ))
      )}
    </>
  );
}
