import React from "react";
import { Formik, Form } from "formik";
import FormField from "../common/FormField";
import loginValidationSchema from "./validationSchema";
import styles from './styles.module.css'


const SignIn = () => {
    const initialValues = {
        email: "",
        password: ""
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        try {
            console.log("Data is submitted:", values);
            // Here you would typically send the data to the server
            resetForm();
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={loginValidationSchema}
        >
        <Form className={styles.formContainer}> 
                <p className={styles.heading} id="heading">Sign In</p>
                <FormField name="email" type="email" placeholder="Email" />
                <FormField name="password" type="password" placeholder="Password" />
                <button type="submit" className={styles.btn} id="btn">Sign In</button>
            </Form>
        </Formik>
    );
};

export default SignIn;
