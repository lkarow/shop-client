import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'Yup';

type Adress = {
  firstName: string;
  lastName: string;
  address: string;
  optional?: string;
  postalCode: string;
  city: string;
  country: string;
};

const shippingSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabetical letters allowed')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabetical letters allowed')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: yup.string().required('Required'),
  optional: yup.string(),
  postalCode: yup.number().required('Required'),
  city: yup.string().required('Required'),
  country: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabetical letters allowed')
    .required('Required'),
});

export default function CheckoutShipping({ saveShippingAddress }) {
  return (
    <>
      <h2 className="heading">Shipping address</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
          optional: '',
          postalCode: '',
          city: '',
          country: '',
        }}
        validationSchema={shippingSchema}
        onSubmit={(values: Adress) => {
          // same shape as initial values
          saveShippingAddress(values);
        }}
      >
        {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
          <Form
            id="shippingForm"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="shippingFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                    placeholder="First name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="shippingLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName}
                    placeholder="Last name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="shippingAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    isValid={touched.address && !errors.address}
                    isInvalid={!!errors.address}
                    placeholder="Address"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="shippingOptional">
                  <Form.Label>Optional</Form.Label>
                  <Form.Control
                    type="text"
                    name="optional"
                    value={values.optional}
                    onChange={handleChange}
                    isValid={touched.optional && !errors.optional}
                    isInvalid={!!errors.optional}
                    placeholder="Apt., suite, etc."
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.optional}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="shippingPostalCode">
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control
                    type="number"
                    name="postalCode"
                    value={values.postalCode}
                    onChange={handleChange}
                    isValid={touched.postalCode && !errors.postalCode}
                    isInvalid={!!errors.postalCode}
                    placeholder="Postal code"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.postalCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="shippingCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isValid={touched.city && !errors.city}
                    isInvalid={!!errors.city}
                    placeholder="City"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="shippingCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    isValid={touched.country && !errors.country}
                    isInvalid={!!errors.country}
                    placeholder="Country"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.country}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Save shipping address</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
