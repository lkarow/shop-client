import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CheckoutTotal from '../components/CheckoutTotal/CheckoutTotal';

describe('<CheckoutTotal />', () => {
  test('calculate the total from the subtotal and the delivery costs', () => {
    render(
      <BrowserRouter>
        <CheckoutTotal
          itemsInCart={[
            {
              item: {
                _id: '1',
                Name: 'testItem',
                Brand: 'testBrand',
                Price: 10,
                ImagePath: 'testPath',
              },
              amount: 1,
              size: '40',
            },
          ]}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('4.99 €')).toBeInTheDocument();
  });

  test('set to free shipping if subtotal is more than 50', () => {
    render(
      <BrowserRouter>
        <CheckoutTotal
          itemsInCart={[
            {
              item: {
                _id: '1',
                Name: 'testItem',
                Brand: 'testBrand',
                Price: 51,
                ImagePath: 'testPath',
              },
              amount: 1,
              size: '40',
            },
          ]}
        />
      </BrowserRouter>
    );
    expect(screen.queryByText('4.99 €')).not.toBeInTheDocument();
  });
});
