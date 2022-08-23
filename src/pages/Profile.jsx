import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LoginView from '../components/LoginView/LoginView';
import RegistrationView from '../components/RegistrationView/RegistrationView';

export default function Profile({ user, saveUser }) {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleLoginRegistration = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <Container fluid>
      <h1>Profile</h1>

      {user && (
        <>
          <Row>
            <Col>Username:</Col>
            <Col>{user.user.Username}</Col>
          </Row>
          <Row>
            <Col>Email:</Col>
            <Col>{user.user.Email}</Col>
          </Row>
          <Row>
            <Col>Password:</Col>
            <Col>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</Col>
          </Row>
          <Row>
            <Col>Birthday:</Col>
            <Col>{user.user.Birthday}</Col>
          </Row>
        </>
      )}
      {!user && isLoginActive ? (
        <LoginView
          toggleLoginRegistration={toggleLoginRegistration}
          saveUser={saveUser}
        />
      ) : null}
      {!user && !isLoginActive ? (
        <RegistrationView toggleLoginRegistration={toggleLoginRegistration} />
      ) : null}
    </Container>
  );
}
