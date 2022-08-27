import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './RegistrationView.scss';

import { register } from '../../api/users';

export default function RegistrationView({ toggleLoginRegistration }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send request to server for register new user
      await register(username, password, email, birthday);
      alert('Registration successful, please login.');
    } catch (error) {
      console.log('Error');
    }
  };

  const handleClickOnLogin = () => {
    toggleLoginRegistration();
  };

  return (
    <Form className="registration-view">
      <h2>Create account</h2>
      <Form.Group className="mb-3" controlId="formRegistrationUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRegistrationPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 4 characters"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRegistrationEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRegistrationBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="Enter birthday"
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          size="lg"
        >
          Register
        </Button>
        <hr />
        <Button variant="secondary" size="lg" onClick={handleClickOnLogin}>
          Login
        </Button>
      </div>
    </Form>
  );
}
