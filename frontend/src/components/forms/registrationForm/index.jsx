import React from 'react';
import { Formik, Form } from 'formik';
import FormField from '../common/FormField';
import validationSchema from './validationSchema';
import styles from './style.module.css'
import { registerUser } from '../../../api/registrationApi';

const Signup = () => {
    const initialValues = {
        name: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try{

            const response = await registerUser(values)
            console.log("Registeration is successful", response)
            resetForm()

        } catch (error) {
            console.error("Registration failed:", error);
            alert("Error in Registration")

        } finally {
            setSubmitting(false);
        }
        alert("User Registered")

    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className={styles.form}>
                <p className={styles.heading}>Sign Up</p>
                <FormField name="name" type="text" placeholder="Name" />
                <FormField name="email" type="email" placeholder="Email" />
                <FormField name="contactNumber" type="text" placeholder="Contact Number" />
                <FormField name="password" type="password" placeholder="Password" />
                <FormField name="confirmPassword" type="password" placeholder="Confirm Password" />
                <button type="submit" className={styles.btn}>Sign Up</button>
            </Form>
        </Formik>
    );
};

export default Signup;
