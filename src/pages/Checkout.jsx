import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import CheckoutCart from '../components/CheckoutCart/CheckoutCart';
import CheckoutTotal from '../components/CheckoutTotal/CheckoutTotal';
import CheckoutShipping from '../components/CheckoutShipping/CheckoutShipping';
import CheckoutPayment from '../components/CheckoutPayment/CheckoutPayment';
import ExpressCheckout from '../components/ExpressCheckout/ExpressCheckout';

import './Checkout.scss';

export default function Checkout({ itemsInCart, removeFromCart }) {
  const [cart, setCart] = useState(true);
  const [shipping, setShipping] = useState(false);
  const [payment, setPayment] = useState(false);

  const handleClickToCheckout = () => {
    if (!shipping && !payment) setCart(!cart);
    if (cart) setShipping(!shipping);
    if (!cart && shipping) {
      setShipping(!shipping);
      setPayment(!payment);
    }
    console.log(cart + ' ' + shipping + ' ' + payment);
  };

  return (
    <Container className="mt-5 mb-5" fluid>
      <Row>
        <Col md={8}>
          <div className="checkout-container mb-4">
            {cart && (
              <>
                <CheckoutCart
                  itemsInCart={itemsInCart}
                  removeFromCart={removeFromCart}
                />
                <Link to={`/`}>
                  <Button className="mt-4" size="lg">
                    Continue shopping
                  </Button>
                </Link>
              </>
            )}
            {shipping && <CheckoutShipping />}
            {payment && <CheckoutPayment />}
          </div>
        </Col>
        <Col>
          <div className="checkout-container mb-4">
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
              {cart && <span>Proceed to shipping</span>}
              {shipping && <span>Proceed to payment</span>}
              {payment && <span>Pay</span>}

              {/* Got to the checkout */}
            </Button>
            <Row>
              <span className="delivery-information mt-4">
                All orders over 50.00 EUR free shipping
              </span>
            </Row>
          </div>

          <div className="checkout-container mb-4">
            <p className="express-checkout">Or proceed with express checkout</p>
            <ExpressCheckout />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
