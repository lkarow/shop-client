import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from '../components/ItemCard/ItemCard';

describe('<ItemCard />', () => {
  test('displays name, brand and price of item', () => {
    render(
      <BrowserRouter>
        <ItemCard
          item={{
            _id: '1',
            Name: 'testItem',
            Brand: 'testBrand',
            Price: 100,
            ImagePath: 'testImagePath',
          }}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('testItem')).toBeInTheDocument();
    expect(screen.getByText('testBrand')).toBeInTheDocument();
    expect(screen.getByText('100 €')).toBeInTheDocument();
  });

  test('displays image with correct src', () => {
    render(
      <BrowserRouter>
        <ItemCard
          item={{
            _id: '1',
            Name: 'testItem',
            Brand: 'testBrand',
            Price: 100,
            ImagePath: 'testImagePath',
          }}
        />
      </BrowserRouter>
    );
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'testImagePath');
  });

  test('displays btn', () => {
    render(
      <BrowserRouter>
        <ItemCard
          item={{
            _id: '1',
            Name: 'testItem',
            Brand: 'testBrand',
            Price: 100,
            ImagePath: 'testImagePath',
          }}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('View');
  });

  test('includes two links to product', () => {
    render(
      <BrowserRouter>
        <ItemCard
          item={{
            _id: '1',
            Name: 'testItem',
            Brand: 'testBrand',
            Price: 100,
            ImagePath: 'testImagePath',
          }}
        />
      </BrowserRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/items/1');
    expect(links[1]).toHaveAttribute('href', '/items/1');
  });
});
