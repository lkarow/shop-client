import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShopPagination from '../components/ShopPagination/ShopPagination';

describe('<ShopPaginagtion />', () => {
  test('displays correct amount of pages', () => {
    render(<ShopPagination paginate={() => {}} currentPage={2} lastPage={5} />);
    const pages = screen.getAllByRole('listitem');
    expect(pages).toHaveLength(5);
  });

  test('marks the correct page as selected page', () => {
    render(<ShopPagination paginate={() => {}} currentPage={2} lastPage={5} />);
    const pages = screen.getAllByRole('listitem');
    expect(pages[1]).toHaveClass('active');
  });
});
