import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CheckoutShipping from '../components/CheckoutShipping/CheckoutShipping';

describe('<CheckoutShipping />', () => {
  test('form contains all necessary inputs', () => {
    render(<CheckoutShipping saveShippingAddress={() => {}} />);
    expect(
      screen.getByLabelText('First Name', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Last Name', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Address', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Optional', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Postal code', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('City', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Country', { selector: 'input' })
    ).toBeInTheDocument();
  });

  test('inputs have placeholder texts', () => {
    render(<CheckoutShipping saveShippingAddress={() => {}} />);
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Apt., suite, etc.')
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Postal code')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Country')).toBeInTheDocument();
  });
});
