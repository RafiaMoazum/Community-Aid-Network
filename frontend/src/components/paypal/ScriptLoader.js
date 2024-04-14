// paypalScriptLoader.js
const loadPaypalScript = (clientId, currency) => {
    return new Promise((resolve, reject) => {
      if (window.paypal) {
        resolve(window.paypal);
      } else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currency}`;
        script.onload = () => resolve(window.paypal);
        script.onerror = () => reject(new Error('PayPal SDK could not be loaded.'));
        document.body.appendChild(script);
      }
    });
  };

  export default loadPaypalScript;
  