import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Item from './pages/Item';
import Checkout from './pages/Checkout';
import NavbarView from './components/NavbarView/NavbarView';
import CartView from './components/CartView/CartView';
import { getItems } from './api/items';
import { updateUser } from './api/users';
import { numberOfItemsInCart } from './utility/utility';

import './App.scss';

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

type User = {
  Birthday?: string;
  Cart: any;
  Email: string;
  Password: string;
  Username: string;
  __v: number;
  _id: string;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getItems().then((response) => setItems(response));
  }, []);

  // Add item to the cart or, if the item is already in the cart, increase the quantity
  const addToCart = (item: Item, size: string) => {
    // First id in cart
    if (!itemsInCart.some((i) => i.item._id === item._id)) {
      setItemsInCart((previous) => [
        ...previous,
        { item: item, amount: 1, size: size },
      ]);
    }

    // Same id but different size
    if (itemsInCart.some((i) => i.item._id === item._id && i.size !== size)) {
      setItemsInCart((previous) => [
        ...previous,
        { item: item, amount: 1, size: size },
      ]);
    }

    // Same id and same size
    if (itemsInCart.some((i) => i.item._id === item._id && i.size === size)) {
      const newItemsInCart = itemsInCart.map((obj) => {
        if (obj.item._id === item._id && obj.size === size)
          return { ...obj, amount: ++obj.amount };
        return obj;
      });
      setItemsInCart(newItemsInCart);
    }
  };

  // Remove item completely from the cart if the amount is one, otherwise decrease the amount of the item
  const removeFromCart = (item: CartItem) => {
    if (
      itemsInCart.some(
        (i) =>
          i.item._id === item.item._id && i.size === item.size && i.amount === 1
      )
    ) {
      setItemsInCart((previous) =>
        previous.filter(
          (savedItem) =>
            savedItem.item._id !== item.item._id || savedItem.size !== item.size
        )
      );
    }
    if (
      itemsInCart.some(
        (i) =>
          i.item._id === item.item._id && i.size === item.size && i.amount > 1
      )
    ) {
      const newItemsInCart = itemsInCart.map((obj) => {
        if (obj.item._id === item.item._id && obj.size === item.size)
          return { ...obj, amount: --obj.amount };
        return obj;
      });
      setItemsInCart(newItemsInCart);
    }
  };

  const showCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const saveUser = (loggedUser: User) => {
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
        <Route path="/" element={<Shop items={items} />} />
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
        <Route path="/items/:itemId" element={<Item addToCart={addToCart} />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              itemsInCart={itemsInCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}
