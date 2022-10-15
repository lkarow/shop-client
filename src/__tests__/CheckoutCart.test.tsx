import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CheckoutCart from '../components/CheckoutCart/CheckoutCart';

describe('<CheckoutCart />', () => {
  test('indicates if no items are in the cart', () => {
    render(
      <BrowserRouter>
        <CheckoutCart itemsInCart={[]} removeFromCart={() => {}} />
      </BrowserRouter>
    );
    expect(
      screen.getByText('Your shopping cart is empty.')
    ).toBeInTheDocument();
  });

  test('list item in cart', () => {
    render(
      <BrowserRouter>
        <CheckoutCart
          itemsInCart={[
            {
              item: {
                _id: '1',
                Name: 'testItem',
                Brand: 'testBrand',
                Price: 100,
                ImagePath: 'testPath',
              },
              amount: 3,
              size: '40',
            },
          ]}
          removeFromCart={() => {}}
        />
      </BrowserRouter>
    );
    const imgs = screen.getAllByRole('img');
    expect(imgs[0]).toHaveAttribute('src', 'testPath');
    expect(screen.getByText('testItem')).toBeInTheDocument();
    expect(screen.getByText('Size: 40')).toBeInTheDocument();
    expect(screen.getByText('100 €')).toBeInTheDocument();
    expect(screen.getByText('Amount: 3')).toBeInTheDocument();
  });
});
