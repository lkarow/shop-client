import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import RegistrationView from '../components/RegistrationView/RegistrationView';

describe('<RegistrationView />', () => {
  test('has inputs for username, password, email and birthday', () => {
    render(<RegistrationView toggleLoginRegistration={() => {}} />);
    expect(
      screen.getByLabelText('Username', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Password', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Email', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Birthday', { selector: 'input' })
    ).toBeInTheDocument();
  });

  test('has login btn and register btn', () => {
    render(<RegistrationView toggleLoginRegistration={() => {}} />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Register' })
    ).toBeInTheDocument();
  });
});
