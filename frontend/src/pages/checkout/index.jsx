import React, { useState } from 'react';
import styles from './CheckoutForm.module.css';
import PayPalButton from '../../components/paypal/PayPalButton';
import BankDetails from '../bankAccountDetails/index';
import { useLocation } from 'react-router-dom';

const CheckoutForm = () => {
  const location = useLocation();
  const { causeId, goalAmount, currentAmount, causeTitle } = location.state;
  console.log(causeId + " " + goalAmount + " " + currentAmount + " " + causeTitle)
  const [customAmount, setCustomAmount] = useState('');
  const [donationAmount, setDonationAmount] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const presetAmounts = [10, 50, 100, 200, 300, 400];

  const progressPercentage = Math.min(100, (currentAmount / goalAmount) * 100);

  const handlePresetAmountClick = (amount) => {
    setCustomAmount('');
    setDonationAmount(amount);
  };

  const handleCustomAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
      setCustomAmount(amount);
      setDonationAmount(parseFloat(amount) || null);
    }
  };

  const handlePaymentMethodChange = (method) => {
    if (!donationAmount) {
      alert('Please enter a donation amount before selecting a payment method.');
      return;
    }
    setPaymentMethod(method);
  };

  const getButtonStyle = (method) => (
    paymentMethod === method ? styles.selectedPaymentButton : styles.paymentButton
  );

  return (
    <div className={styles.container}>
    <h1 className={styles.causeTitle}>{causeTitle}</h1> {/* Styled title */}
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBarBackground}>
        <div style={{ width: `${progressPercentage}%` }} className={styles.progressBarFill}>
          {progressPercentage.toFixed(2)}%
        </div>
      </div>
      <p>{currentAmount} of {goalAmount} raised</p>
    </div>
      <form onSubmit={e => e.preventDefault()}>
        <p className={styles.titleDonationAmountSection}>Select Your Contribution or Enter Your Own</p>
        <div className={styles.donationAmountSection}>
          {presetAmounts.map(amount => (
            <button
              type="button"
              key={amount}
              onClick={() => handlePresetAmountClick(amount)}
              className={donationAmount === amount ? styles.selectedButton : styles.donationButton}
            >
              ${amount}
            </button>
          ))}
          <div className={styles.customAmountWrapper}>
            <input
              type="text"
              className={styles.customAmountInput}
              placeholder="0.00"
              value={customAmount}
              onChange={handleCustomAmountChange}
              aria-label="Custom donation amount"
            />
          </div>
        </div>
        <div className={styles.mainpaymentMethodSection}>
          <p className={styles.titlePaymentMethodSection}>Select payment method</p>
          <div className={styles.paymentMethodSection}>
            <button type="button" onClick={() => handlePaymentMethodChange('paypal')} className={getButtonStyle('paypal')}>
              PayPal
            </button>
            <button type="button" onClick={() => handlePaymentMethodChange('direct')} className={getButtonStyle('direct')}>
              Direct Bank Transfer
            </button>
          </div>
        </div>
        <div className={styles.sectionFour}>
          {paymentMethod === 'paypal' && <PayPalButton caseId={causeId} donationAmount={donationAmount} />}
          {paymentMethod === 'direct' && <BankDetails />}
        </div>
        <div className={styles.donationTotal}>
          <p>Donation Total: ${donationAmount || 0}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
