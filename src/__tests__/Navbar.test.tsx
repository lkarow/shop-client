import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavbarView from '../components/NavbarView/NavbarView';

describe('<NavbarView />', () => {
  test('has link to shop in it', () => {
    render(
      <BrowserRouter>
        <NavbarView numberOfItemsInCart={0} showCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toHaveAttribute('href', '/');
  });

  test('has link to checkout in it', () => {
    render(
      <BrowserRouter>
        <NavbarView numberOfItemsInCart={0} showCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Checkout')).toHaveAttribute('href', '/checkout');
  });

  test('has link to profile in it', () => {
    render(
      <BrowserRouter>
        <NavbarView numberOfItemsInCart={0} showCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toHaveAttribute('href', '/profile');
  });

  test('has cart btn in it', () => {
    render(
      <BrowserRouter>
        <NavbarView numberOfItemsInCart={0} showCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('indicator on the cart btn shows the correct number of items in the cart', () => {
    render(
      <BrowserRouter>
        <NavbarView numberOfItemsInCart={10} showCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
