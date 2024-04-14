import React, { useState } from 'react';
import styles from './proof.module.css'; // Importing the CSS module

const DonationProofForm = () => {
    const [formData, setFormData] = useState({
        amount: '',
        dateOfTransaction: '',
        transactionID: '',
        proofOfPayment: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'proofOfPayment' && files.length > 0) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.proofOfPayment) {
            alert('Please upload a proof of payment.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('amount', formData.amount);
        formDataToSend.append('dateOfTransaction', formData.dateOfTransaction);
        formDataToSend.append('transactionID', formData.transactionID);
        formDataToSend.append('proofOfPayment', formData.proofOfPayment);

        try {
            const response = await fetch('/api/submit-donation-proof', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                alert('Your donation proof has been submitted successfully!');
                setFormData({ amount: '', dateOfTransaction: '', transactionID: '', proofOfPayment: null }); // Reset form
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            alert(`Submission failed: ${error.message}`);
        }
    };

    return (
      <div className={styles.formContainer}>
          <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>Donation Proof Form</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                  <label className={styles.formLabel}>
                      Amount:
                      <input
                          required
                          type="number"
                          step="0.01"
                          className={styles.input}
                          placeholder="Enter donation amount"
                          value={formData.amount}
                          onChange={handleChange}
                          name="amount"
                      />
                  </label>
                  <label className={styles.formLabel}>
                      Date of Transaction:
                      <input
                          type="date"
                          className={styles.input}
                          placeholder="Select date"
                          value={formData.dateOfTransaction}
                          onChange={handleChange}
                          name="dateOfTransaction"
                      />
                  </label>
                  <label className={styles.formLabel}>
                      Transaction ID:
                      <input
                          type="text"
                          className={styles.input}
                          placeholder="Enter transaction ID"
                          value={formData.transactionID}
                          onChange={handleChange}
                          name="transactionID"
                      />
                  </label>
                  <label className={styles.formLabel}>
                      Upload Receipt:
                      <input
                          type="file"
                          className={styles.input}
                          onChange={handleChange}
                          name="proofOfPayment"
                      />
                  </label>
                  <button className={styles.submit} type="submit">Submit</button>
              </form>
          </div>
      </div>
  );
};

export default DonationProofForm;
