import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Checkout from '../pages/Checkout';

describe('<CheckoutTotal />', () => {
  test('render <CheckoutCart /> and <CheckoutTotal />', () => {
    render(
      <BrowserRouter>
        <Checkout itemsInCart={[]} removeFromCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText('Shopping cart')).toBeInTheDocument();
    expect(screen.getByText('Total (VAT included)')).toBeInTheDocument();
  });

  test('render btn to proceed to shipping', () => {
    render(
      <BrowserRouter>
        <Checkout itemsInCart={[]} removeFromCart={() => {}} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', { name: 'Proceed to shipping' })
    ).toBeInTheDocument();
  });

  test('render btn to continue shopping', () => {
    render(
      <BrowserRouter>
        <Checkout itemsInCart={[]} removeFromCart={() => {}} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', { name: 'Continue shopping' })
    ).toBeInTheDocument();
  });
});
