import React from "react";
import styles from './bankDetails.module.css';

const BankDetails = () => {

    return (
        <div className={styles.bankDetails} >
      <h3>Direct Deposit</h3>
      <h4>Pakistan</h4>
      <p>AL BARAKA BANK</p>
      <p>Branch code: 0108</p>
      <p>Account Title: Shahid Afridi Foundation</p>
      <p>Swift Code for all Accounts: AIINPKKA</p>
      <div className={styles.buttonContainer}>
        <button className={styles.uploadProofButton} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className={styles.buttonIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="currentColor" strokeWidth="2"></path>
              <path d="M17 15V18M17 21V18M17 18H14M17 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          Add File
       </button>
      </div>
    </div> 
    )
}

export default BankDetails;