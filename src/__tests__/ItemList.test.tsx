import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemList from '../components/ItemsList/ItemList';

describe('<ItemList />', () => {
  test('if no such product exist display a corresponding info', () => {
    render(
      <BrowserRouter>
        <ItemList
          items={[
            {
              _id: '1',
              Name: 'testItem',
              Brand: 'testBrand',
              Price: 100,
              ImagePath: 'testPath',
            },
            {
              _id: '2',
              Name: 'testItem',
              Brand: 'testBrand',
              Price: 100,
              ImagePath: 'testPath',
            },
          ]}
        />{' '}
      </BrowserRouter>
    );
    expect(screen.getAllByText('testItem')).toHaveLength(2);
  });
});
