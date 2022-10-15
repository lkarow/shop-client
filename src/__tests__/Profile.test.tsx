import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Profile from '../pages/Profile';

describe('<Profile />', () => {
  test('displays user data', () => {
    render(
      <Profile
        user={{
          Username: 'testuser',
          Password: 'testpassword',
          Email: 'mail',
          Birthday: '1/1/2022',
          Cart: '',
          __v: 1,
          _id: '1',
        }}
        saveUser={() => {}}
        handleChangeUserData={() => {}}
        handleSaveUserData={() => {}}
      />
    );
    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.getByText('mail')).toBeInTheDocument();
    expect(screen.getByText('1/1/2022')).toBeInTheDocument();
  });

  test('password is not displayed', () => {
    render(
      <Profile
        user={{
          Username: 'testuser',
          Password: 'testpassword',
          Email: 'mail',
          Birthday: '1/1/2022',
          Cart: '',
          __v: 1,
          _id: '1',
        }}
        saveUser={() => {}}
        handleChangeUserData={() => {}}
        handleSaveUserData={() => {}}
      />
    );
    expect(screen.queryByText('testpassword')).not.toBeInTheDocument();
  });

  test('delete account btn', () => {
    render(
      <Profile
        user={{
          Username: 'testuser',
          Password: 'testpassword',
          Email: 'mail',
          Birthday: '1/1/2022',
          Cart: '',
          __v: 1,
          _id: '1',
        }}
        saveUser={() => {}}
        handleChangeUserData={() => {}}
        handleSaveUserData={() => {}}
      />
    );
    expect(
      screen.getByRole('button', { name: 'Delete account' })
    ).toBeInTheDocument();
  });
});
