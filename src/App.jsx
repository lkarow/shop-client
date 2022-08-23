import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop';
import Profile from './pages/Profile';
import NavbarView from './components/NavbarView/NavbarView';
import CartView from './components/CartView/CartView';

import { getItems } from './api/items';

import './App.scss';

export default function App() {
  const [items, setItems] = useState('');
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    getItems().then((response) => setItems(response));
  }, []);

  const addToCart = (item) => {
    setItemsInCart((previous) => [...previous, item]);
  };

  const removeFromCart = (item) => {
    setItemsInCart((previous) =>
      previous.filter((savedItem) => savedItem._id !== item._id)
    );
  };

  const showCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const saveUser = (loggedUser) => {
    setUser(loggedUser);
  };

  return (
    <>
      <NavbarView
        numberOfItemsInCart={itemsInCart.length}
        showCart={showCart}
      />
      <CartView
        cartIsOpen={cartIsOpen}
        showCart={showCart}
        itemsInCart={itemsInCart}
        removeFromCart={removeFromCart}
      />
      <Routes>
        <Route
          path="/"
          element={<Shop items={items} addToCart={addToCart} />}
        />
        <Route
          path="/profile"
          element={<Profile user={user} saveUser={saveUser} />}
        />
      </Routes>
    </>
  );
}
