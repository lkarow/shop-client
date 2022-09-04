import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutPayment() {
  return (
    <>
      <h2 className="heading">Payment details</h2>
      <h3>Credit card</h3>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="paymentCreditCardNumber">
            <Form.Label>Credit card number</Form.Label>
            <Form.Control type="text" placeholder="Credit card number" />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="expiringDate">
              <Form.Label>Expiring date</Form.Label>
              <Form.Control type="date" placeholder="Expiring date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="cvcCode">
              <Form.Label>CVC code</Form.Label>
              <Form.Control type="password" placeholder="CVC code" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
}
