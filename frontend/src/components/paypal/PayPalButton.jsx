import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loadPaypalScript from './ScriptLoader';

const PayPalButton = ({ caseId , donationAmount = 100 }) => {
  console.log("donation Amount" + donationAmount)
  const [message, setMessage] = useState('');

  useEffect(() => {
    const clientId = 'AcpNnAGuhcvNMtYCpkrOoPWho5aSYlvpTY-gzM-PmMrDqzuFhQ-uK5rx5V5RQM0ObruAZCRQkCFdXiNl'; // Load from .env in a real scenario
    loadPaypalScript(clientId, 'USD')
      .then(paypal => {
        paypal.Buttons({
          createOrder: async (data, actions) => {
            try {
              const response = await axios.post("http://localhost:3000/api/orders", {caseId, donationAmount});
              return response.data.id;
            } catch (error) {
              console.error("Order creation failed:", error);
              setMessage("Could not initiate PayPal Checkout.");
              return actions.reject(); // Properly handle rejection in PayPal's flow
            }
          },
          onApprove: async (data, actions) => {
            try {
              const response = await axios.post(`http://localhost:3000/api/orders/${data.orderID}/capture`);
              setMessage(`Transaction successful: ${data.orderID}`);
              console.log("Capture result:", response.data);
            } catch (error) {
              console.error("Transaction failed:", error);
              setMessage("Transaction could not be processed.");
            }
          },
          onError: (error) => {
            console.error('PayPal error:', error);
            setMessage('An error occurred with PayPal.');
          }
        }).render('#paypal-button-container');
      })
      .catch(error => {
        console.error('Error loading PayPal SDK:', error);
        setMessage('Failed to load PayPal SDK.');
      });
  }, [caseId, donationAmount]);

  return (
    <>
      <div id="paypal-button-container"></div>
      <p>{message}</p>
    </>
  );
};

export default PayPalButton;
