import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import LoginView from '../components/LoginView/LoginView';

describe('<LoginView />', () => {
  test('has inputs for username and password', () => {
    render(
      <LoginView toggleLoginRegistration={() => {}} saveUser={() => {}} />
    );
    expect(
      screen.getByLabelText('Username', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Password', { selector: 'input' })
    ).toBeInTheDocument();
  });

  test('has login btn and register btn', () => {
    render(
      <LoginView toggleLoginRegistration={() => {}} saveUser={() => {}} />
    );
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Register' })
    ).toBeInTheDocument();
  });
});
