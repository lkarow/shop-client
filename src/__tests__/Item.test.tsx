import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Item from '../pages/Item';

describe('<Item /> with wrong link', () => {
  test('if no such product exist display a corresponding info', () => {
    render(<Item addToCart={() => {}} />);
    expect(screen.getByText('There is no such item')).toBeInTheDocument();
  });
});
