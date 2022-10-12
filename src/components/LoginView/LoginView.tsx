import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './LoginView.scss';

import { login } from '../../api/users';

export default function LoginView({ toggleLoginRegistration, saveUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Validate user input
  const validLoginInput = (): boolean => {
    let validInput = true;
    if (!username || parseInt(username) < 3) {
      validInput = false;
    }
    if (!password || parseInt(password) < 4) {
      validInput = false;
    }
    return validInput;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validInput = validLoginInput();
    if (validInput) {
      try {
        // Send request to server for authentication
        let response = await login(username, password);
        saveUser(response.user);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.user.Username);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClickOnRegistration = () => {
    toggleLoginRegistration();
  };

  return (
    <Form className="login-view">
      <h2>Log in to the shop</h2>
      <Form.Group className="mb-3" controlId="formLoginUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 4 characters"
          required
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          size="lg"
        >
          Login
        </Button>
        <hr />
        <Button
          variant="secondary"
          size="lg"
          onClick={handleClickOnRegistration}
        >
          Register
        </Button>
      </div>
    </Form>
  );
}
