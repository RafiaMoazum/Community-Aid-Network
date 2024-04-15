import React from 'react';
import { Formik, Form } from 'formik';
import FormField from '../common/FormField';
import validationSchema from './validationSchema';
import styles from './style.module.css'
import  registerUser  from '../../../api/registrationApi';
import Background from '../../../assets/images/registeration-bg.png'

const Signup = () => {
    const initialValues = {
        name: '',
        email: '',
        address:'',
        cnic: '',
        contactNo: '',
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
            <Form className={styles.mainForm} >
                <div className={styles.sideImage}>
                    <img src={Background} alt="" srcset="" />
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.form}>
                    <p className={styles.heading}>Sign Up</p>
                    <FormField name="name" type="text" placeholder="Name" />
                    <FormField name="email" type="email" placeholder="Email" />
                    <FormField name="address" type="address" placeholder="Address" />
                    <FormField name="cnic" type="text" placeholder="CNIC" />
                    <FormField name="contactNo" type="text" placeholder="Contact Number" />
                    <FormField name="password" type="password" placeholder="Password" />
                    <FormField name="confirmPassword" type="password" placeholder="Confirm Password" />
                    <button type="submit" className={styles.btn}> Sign Up </button>
                    </div>
                </div>
                
            </Form>
        </Formik>
    );
};

export default Signup;
