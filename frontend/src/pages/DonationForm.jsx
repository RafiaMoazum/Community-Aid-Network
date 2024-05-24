import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { useNavigate,useLocation } from 'react-router';
import styles from "./styles/addCause.module.css"

const DonationForm = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const { causeId } = location.state || {};

    const [donationData, setDonationData] = useState({
        donation_amount: '',
    });

    const initialValues = {
        donation_amount: '',
    }


    const validationSchema = Yup.object({
      
        donation_amount: Yup.number().required('Donation Amount is required')
            .positive('Donation Amount must be a positive number')
            .integer('Donation Amount must be an integer'),
      
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const formData = new FormData();
          

            const token = localStorage.getItem('token');

            const res = await axios.post(`http://localhost:3000/addDonation/${causeId}`, values, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                }
            });
            
            setDonationData(res);
        } catch (error) {
            console.log("Error getting data", error);
        }

        console.log("values", values);

        setSubmitting(false);
        alert("Donation Form is submitted! Thankyou for your support");
       navigate("/");
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            
                <Form className={styles.mainFormContainer}>
                    <div className={styles.formContainer}>
                    <h2 className={styles.formHeading}>Donation</h2>
                    
                    <Field type="number" name="donation_amount" placeholder="Donation Amount" className={styles.field} />
                    <ErrorMessage name="donation_amount" component="div" className={styles.errorMessage} />
                   

                    <button type="submit" className={styles.submitButton}>Add Donation</button>
                    </div>
                </Form>
            
        </Formik>
    );
}

export default DonationForm;
