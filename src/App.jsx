import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop';
import Profile from './pages/Profile';
import NavbarView from './components/NavbarView/NavbarView';
import CartView from './components/CartView/CartView';

import { getItems } from './api/items';
import { updateUser } from './api/users';
import { numberOfItemsInCart } from './utility/utility';

import './App.scss';

export default function App() {
  const [items, setItems] = useState('');
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getItems().then((response) => setItems(response));
  }, []);

  // Add item to the cart or, if the item is already in the cart, increase the quantity
  const addToCart = (item) => {
    if (!itemsInCart.some((i) => i.item._id === item._id)) {
      setItemsInCart((previous) => [...previous, { item: item, amount: 1 }]);
    }
    if (itemsInCart.some((i) => i.item._id === item._id)) {
      const newItemsInCart = itemsInCart.map((obj) => {
        if (obj.item._id === item._id) return { ...obj, amount: ++obj.amount };
        return obj;
      });
      setItemsInCart(newItemsInCart);
    }
  };

  // Remove item completely from the cart if the amount is one, otherwise decrease the amount of the item
  const removeFromCart = (item) => {
    if (
      itemsInCart.some((i) => i.item._id === item.item._id && i.amount === 1)
    ) {
      setItemsInCart((previous) =>
        previous.filter((savedItem) => savedItem.item._id !== item.item._id)
      );
    }
    if (itemsInCart.some((i) => i.item._id === item.item._id && i.amount > 1)) {
      const newItemsInCart = itemsInCart.map((obj) => {
        if (obj.item._id === item.item._id)
          return { ...obj, amount: --obj.amount };
        return obj;
      });
      setItemsInCart(newItemsInCart);
    }
  };

  const showCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const saveUser = (loggedUser) => {
    setUser(loggedUser);
  };

  // Handle edit of user data
  const handleChangeUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  // Handle save of edited user data
  const handleSaveUserData = () => {
    updateUser(user);
  };

  return (
    <>
      <NavbarView
        numberOfItemsInCart={numberOfItemsInCart(itemsInCart)}
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
          element={
            <Profile
              user={user}
              saveUser={saveUser}
              handleChangeUserData={handleChangeUserData}
              handleSaveUserData={handleSaveUserData}
            />
          }
        />
      </Routes>
    </>
  );
}
