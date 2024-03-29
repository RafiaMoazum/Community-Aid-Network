import React from "react";
import { Formik, Form } from "formik";
import FormField from "../common/FormField";
import loginValidationSchema from "./validationSchema";
import styles from './styles.module.css'
import signInUser from "../../../api/signInApi";


const SignIn = () => {
    const initialValues = {
        email: "",
        password: ""
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
           const response = await signInUser(values); // Using await here requires the function to be async
            console.log("You are Signed in", response);
            resetForm();
        } catch (error) {
            console.log(error.message); // Improved error logging
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
