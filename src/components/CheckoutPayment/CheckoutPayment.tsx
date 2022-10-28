import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Formik } from 'formik';
import * as yup from 'Yup';

const creditCardSchema = yup.object().shape({
  creditCardNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Only numbers allowed')
    .min(14, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  name: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabetical letters allowed')
    .required('Required'),
  expDate: yup
    .string()
    .matches(/^[0-1][0-9]\/[0-9][0-9]+$/, 'Please enter in the format MM/YYY')
    .required('Required'),
  cvc: yup
    .string()
    .matches(/^[0-9]+$/, 'Only numbers allowed')
    .min(3, 'Too Short!')
    .max(3, 'Too long!')
    .required('Required'),
});

export default function CheckoutPayment() {
  return (
    <>
      <h2 className="heading">Payment details</h2>
      <h3>Credit card</h3>
      <Formik
        initialValues={{
          creditCardNumber: '',
          name: '',
          expDate: '',
          cvc: '',
        }}
        validationSchema={creditCardSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
          <Form
            id="paymentForm"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <Row>
              <Form.Group className="mb-3" controlId="creditCardNumber1">
                <Form.Label>Credit card number</Form.Label>
                <Form.Control
                  type="text"
                  name="creditCardNumber"
                  value={values.creditCardNumber}
                  onChange={handleChange}
                  isValid={touched.creditCardNumber && !errors.creditCardNumber}
                  isInvalid={!!errors.creditCardNumber}
                  placeholder="Credit card number"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.creditCardNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                    placeholder="Name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="expiringDate">
                  <Form.Label>Expiring date</Form.Label>
                  <Form.Control
                    type="text"
                    name="expDate"
                    value={values.expDate}
                    onChange={handleChange}
                    isValid={touched.expDate && !errors.expDate}
                    isInvalid={!!errors.expDate}
                    placeholder="MM/YY"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.expDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="cvcCode">
                  <Form.Label>CVC code</Form.Label>
                  <Form.Control
                    type="password"
                    name="cvc"
                    value={values.cvc}
                    onChange={handleChange}
                    isValid={touched.cvc && !errors.cvc}
                    isInvalid={!!errors.cvc}
                    placeholder="CVC code"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.cvc}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}
