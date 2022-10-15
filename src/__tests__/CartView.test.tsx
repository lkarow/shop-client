import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartView from '../components/CartView/CartView';

describe('<CartView />', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  test('indicates if no items are in the cart', () => {
    render(
      <BrowserRouter>
        <CartView
          cartIsOpen={true}
          showCart={() => {}}
          itemsInCart={[]}
          removeFromCart={() => {}}
        />
      </BrowserRouter>
    );
    expect(
      screen.getByText('Your shopping cart is empty.')
    ).toBeInTheDocument();
  });

  test('list item in cart', () => {
    render(
      <BrowserRouter>
        <CartView
          cartIsOpen={true}
          showCart={() => {}}
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
    expect(screen.getByText('Size 40')).toBeInTheDocument();
    expect(screen.getByText('100 €')).toBeInTheDocument();
    expect(screen.getByText('3 x')).toBeInTheDocument();
  });

  test('add up all prices of the items in the cart', () => {
    render(
      <BrowserRouter>
        <CartView
          cartIsOpen={true}
          showCart={() => {}}
          itemsInCart={[
            {
              item: {
                _id: '1',
                Name: 'testItem',
                Brand: 'testBrand',
                Price: 100,
                ImagePath: 'testPath',
              },
              amount: 1,
              size: '40',
            },
            {
              item: {
                _id: '2',
                Name: 'testItem',
                Brand: 'testBrand',
                Price: 100,
                ImagePath: 'testPath',
              },
              amount: 1,
              size: '36',
            },
          ]}
          removeFromCart={() => {}}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('Sum: 200 €')).toBeInTheDocument();
  });

  test('render checkout btn', () => {
    render(
      <BrowserRouter>
        <CartView
          cartIsOpen={true}
          showCart={() => {}}
          itemsInCart={[]}
          removeFromCart={() => {}}
        />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', { name: 'Checkout' })
    ).toBeInTheDocument();
  });
});
