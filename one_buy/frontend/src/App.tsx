import React from 'react';
import { Payment } from './components/Payment';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
      <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
        <Payment />
      </PayPalScriptProvider>
  );
}

export default App;
