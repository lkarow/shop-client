import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function ExpressCheckout() {
  return (
    <>
      <PayPalScriptProvider options={{ 'client-id': 'test' }}>
        <PayPalButtons style={{ layout: 'horizontal' }} />
      </PayPalScriptProvider>
    </>
  );
}
