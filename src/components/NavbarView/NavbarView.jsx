import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

import CartIcon from '../../assets/img/shopping-cart-icon.svg';
import './NavbarView.scss';

export default function NavbarView({ numberOfItemsInCart, showCart }) {
  const handleClick = () => {
    showCart();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand to="/" as={NavLink}>
          Your shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Shop
          </Nav.Link>
          <Nav.Link to="/profile" as={NavLink}>
            Profile
          </Nav.Link>
        </Nav>
        <Button className="cart-btn" variant="light" onClick={handleClick}>
          <img src={CartIcon} className="cart-icon" alt="Shopping cart icon" />
          {numberOfItemsInCart > 0 && (
            <div className="item-indicator">{numberOfItemsInCart}</div>
          )}
        </Button>
      </Container>
    </Navbar>
  );
}
