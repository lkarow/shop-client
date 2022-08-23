import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './LoginView.scss';

export default function LoginView({ toggleLoginRegistration, saveUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Validate user input
  const validLoginInput = () => {
    let validInput = true;
    if (!username) {
      validInput = false;
    }
    if (username < 3) {
      validInput = false;
    }

    if (!password) {
      validInput = false;
    }
    if (password < 4) {
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
        let response = await axios.post(
          'https://shop-api-2022.herokuapp.com/login',
          {
            Username: username,
            Password: password,
          }
        );
        console.log(response.data);
        saveUser(response.data);
      } catch (error) {
        console.log('No such user');
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
