import React from 'react';
import { Formik, Form } from 'formik';
import FormField from '../common/FormField';
import validationSchema from './validationSchema';
import "./style.css"; // Make sure this path is correct
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
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form id="form">
                <p id="heading">Sign Up</p> {/* Use of heading ID */}
                <FormField name="name" type="text" placeholder="Name" />
                <FormField name="email" type="email" placeholder="Email" />
                <FormField name="contactNumber" type="text" placeholder="Contact Number" />
                <FormField name="password" type="password" placeholder="Password" />
                <FormField name="confirmPassword" type="password" placeholder="Confirm Password" />
                <button type="submit" id="btn">Sign Up</button>
            </Form>
        </Formik>
    );
};

export default Signup;
