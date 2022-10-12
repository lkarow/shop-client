import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import LoginView from '../components/LoginView/LoginView';
import RegistrationView from '../components/RegistrationView/RegistrationView';

import './Profile.scss';

import { deleteUser } from '../api/users';
import { formatDate } from '../utility/utility';

const editIcon = require('../assets/img/edit-icon.svg') as string;

type Props = {
  user: User;
  saveUser: any;
  handleChangeUserData: any;
  handleSaveUserData: any;
};

type User = {
  Birthday?: string;
  Cart: any;
  Email: string;
  Password: string;
  Username: string;
  __v: number;
  _id: string;
};

export default function Profile({
  user,
  saveUser,
  handleChangeUserData,
  handleSaveUserData,
}: Props) {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [displayUsernameEdit, setDisplayUsernameEdit] = useState(false);
  const [displayPasswordEdit, setDisplayPasswordEdit] = useState(false);
  const [displayEmailEdit, setDisplayEmailEdit] = useState(false);
  const [displayBirthdayEdit, setDisplayBirthdayEdit] = useState(false);

  const toggleLoginRegistration = () => {
    setIsLoginActive(!isLoginActive);
  };

  // Toggle inputs to edit the user data
  const toggleEditUsername = () => {
    setDisplayUsernameEdit(!displayUsernameEdit);
  };
  const toggleEditPassword = () => {
    setDisplayPasswordEdit(!displayPasswordEdit);
  };
  const toggleEditEmail = () => {
    setDisplayEmailEdit(!displayEmailEdit);
  };
  const toggleEditBirthday = () => {
    setDisplayBirthdayEdit(!displayBirthdayEdit);
  };

  return (
    <Container className="profile-data mt-5 mb-5" fluid>
      {/* User data and inputs to edit user data */}
      {user && (
        <>
          {/* Username */}
          <Row className="mb-3">
            <Col id="username" sm={3}>
              Username:
            </Col>
            {!displayUsernameEdit ? (
              <Col sm={8}>{user.Username}</Col>
            ) : (
              <Col sm={8}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    name="Username"
                    value={user.Username}
                    onChange={(e) => handleChangeUserData(e)}
                    aria-label="Username"
                    aria-describedby="username"
                  />
                </InputGroup>
              </Col>
            )}
            <Col sm={1}>
              <img
                src={editIcon}
                className="edit-icon"
                alt="Edit"
                onClick={toggleEditUsername}
              />
            </Col>
            {displayUsernameEdit ? (
              <Row>
                <Col sm={{ offset: 3 }}>
                  <Button
                    className="m-1"
                    variant="primary"
                    onClick={handleSaveUserData}
                  >
                    Save
                  </Button>
                  <Button
                    className="m-1"
                    variant="secondary"
                    onClick={toggleEditUsername}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            ) : null}
          </Row>
          {/* Password */}
          <Row className="mb-3">
            <Col id="password" sm={3}>
              Password:
            </Col>
            {!displayPasswordEdit ? (
              <Col sm={8}>
                &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;
              </Col>
            ) : (
              <Col sm={8}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="password"
                    name="Password"
                    value={user.Password}
                    onChange={(e) => handleChangeUserData(e)}
                    aria-label="Password"
                    aria-describedby="password"
                  />
                </InputGroup>
                <Button
                  className="m-1"
                  variant="primary"
                  onClick={handleSaveUserData}
                >
                  Save
                </Button>
                <Button
                  className="m-1"
                  variant="secondary"
                  onClick={toggleEditPassword}
                >
                  Cancel
                </Button>
              </Col>
            )}
            <Col sm={1}>
              <img
                src={editIcon}
                className="edit-icon"
                alt="Edit"
                onClick={toggleEditPassword}
              />
            </Col>
          </Row>
          {/* Email */}
          <Row className="mb-3">
            <Col id="email" sm={3}>
              Email:
            </Col>
            {!displayEmailEdit ? (
              <Col sm={8}>{user.Email}</Col>
            ) : (
              <Col sm={8}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    name="Email"
                    value={user.Email}
                    onChange={(e) => handleChangeUserData(e)}
                    aria-label="Email"
                    aria-describedby="email"
                  />
                </InputGroup>
                <Button
                  className="m-1"
                  variant="primary"
                  onClick={handleSaveUserData}
                >
                  Save
                </Button>
                <Button
                  className="m-1"
                  variant="secondary"
                  onClick={toggleEditEmail}
                >
                  Cancel
                </Button>
              </Col>
            )}
            <Col sm={1}>
              <img
                src={editIcon}
                className="edit-icon"
                alt="Edit"
                onClick={toggleEditEmail}
              />
            </Col>
          </Row>
          {/* Birthday */}
          <Row className="mb-3">
            <Col id="birthday" sm={3}>
              Birthday:
            </Col>
            {!displayBirthdayEdit ? (
              <Col sm={8}>{formatDate(user.Birthday)}</Col>
            ) : (
              <Col sm={8}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    name="Birthday"
                    value={user.Birthday}
                    onChange={(e) => handleChangeUserData(e)}
                    aria-label="Birthday"
                    aria-describedby="birtday"
                  />
                </InputGroup>
                <Button
                  className="m-1"
                  variant="primary"
                  onClick={handleSaveUserData}
                >
                  Save
                </Button>
                <Button
                  className="m-1"
                  variant="secondary"
                  onClick={toggleEditBirthday}
                >
                  Cancel
                </Button>
              </Col>
            )}
            <Col sm={1}>
              <img
                src={editIcon}
                className="edit-icon"
                alt="Edit"
                onClick={toggleEditBirthday}
              />
            </Col>
          </Row>
        </>
      )}
      {/* Login and registration form */}
      {!user && isLoginActive ? (
        <LoginView
          toggleLoginRegistration={toggleLoginRegistration}
          saveUser={saveUser}
        />
      ) : null}
      {!user && !isLoginActive ? (
        <RegistrationView toggleLoginRegistration={toggleLoginRegistration} />
      ) : null}

      {user && (
        <Button onClick={() => deleteUser()} className="mt-3" variant="danger">
          Delete account
        </Button>
      )}
    </Container>
  );
}
