import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import CheckoutCart from '../components/CheckoutCart/CheckoutCart';
import CheckoutTotal from '../components/CheckoutTotal/CheckoutTotal';
import CheckoutShipping from '../components/CheckoutShipping/CheckoutShipping';
import CheckoutPayment from '../components/CheckoutPayment/CheckoutPayment';
import ExpressCheckout from '../components/ExpressCheckout/ExpressCheckout';

import './Checkout.scss';

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

type Adress = {
  firstName: string;
  lastName: string;
  address: string;
  optional?: string;
  postalCode: string;
  city: string;
  country: string;
};

export default function Checkout({ itemsInCart, removeFromCart }: Props) {
  const [cart, setCart] = useState(true);
  const [shipping, setShipping] = useState(false);
  const [payment, setPayment] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(false);

  const handleClickToCheckout = () => {
    if (!shipping && !payment) setCart(!cart);
    if (cart) setShipping(!shipping);
    if (!cart && shipping && shippingAddress) {
      setShipping(!shipping);
      setPayment(!payment);
    }
  };

  const saveShippingAddress = (address: Adress) => {
    if (address) setShippingAddress(true);
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
            {shipping && (
              <CheckoutShipping saveShippingAddress={saveShippingAddress} />
            )}
            {payment && <CheckoutPayment />}
          </div>
        </Col>
        <Col>
          <div className="checkout-container mb-4">
            <CheckoutTotal itemsInCart={itemsInCart} />
            {/* Render button with tooltip if shipping form is active and shipping address is not saved */}
            {shipping && !shippingAddress ? (
              <OverlayTrigger
                overlay={
                  <Tooltip>Please save your shipping address first!</Tooltip>
                }
              >
                <span className="d-block">
                  <Button
                    onClick={handleClickToCheckout}
                    className="checkout mt-4"
                    size="lg"
                    variant="warning"
                    disabled={shipping && !shippingAddress ? true : false}
                  >
                    {shipping && <span>Proceed to payment</span>}
                  </Button>
                </span>
              </OverlayTrigger>
            ) : (
              <Button
                onClick={handleClickToCheckout}
                className="checkout mt-4"
                size="lg"
                variant="warning"
                disabled={shipping && !shippingAddress ? true : false}
              >
                {cart && <span>Proceed to shipping</span>}
                {shipping && <span>Proceed to payment</span>}
                {payment && <span>Pay</span>}
              </Button>
            )}
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
