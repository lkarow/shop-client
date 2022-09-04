import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutShipping() {
  return (
    <>
      <h2 className="heading">Shipping address</h2>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="shippingFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="shippingLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="shippingAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="shippingOptional">
              <Form.Label>Optional</Form.Label>
              <Form.Control type="text" placeholder="Apt., suite, etc." />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="shippingPostalCode">
              <Form.Label>Postal code</Form.Label>
              <Form.Control type="number" placeholder="Postal code" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="shippingCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="shippingCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
}
