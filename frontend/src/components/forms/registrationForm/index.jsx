import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.css"

const Signup = () => {

    const initialValues = {
        name: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        contactNumber: Yup.string()
          .matches(/^[0-9+]*$/, 'Invalid contact number')
          .min(10, 'Contact number must be at least 10 characters')
          .max(15, 'Contact number must be at most 15 characters'),
        password: Yup.string()
          .matches(/^(?=.\d)(?=.[A-Z])[0-9a-zA-Z]{8,}$/, 'Password must contain at least one number and one uppercase letter')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
    });

    const handleSubmit =(values, { setSubmitting }) =>{
        console.log("values", values);
        setSubmitting(false); 
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form id="form">
                <p id="heading">Sign Up</p>
                <Field type="text" id="name" name="name" placeholder="Name" className="field" />
                <ErrorMessage name="name" className="errorMessage" />
                <br />
                <br />
                <Field type="email" id="email" name="email" placeholder="Email" className="field" />
                <ErrorMessage name="email" className="errorMessage"  />
                <br />
                <br />
                <Field type="text" id="contactNumber" name="contactNumber" placeholder="Contact Number" className="field" />
                <ErrorMessage name="contactNumber" className="errorMessage" />
                <br />
                <br />
                <Field type="password" id="password" name="password" placeholder="Password" className="field" />
                <ErrorMessage name="password" className="errorMessage"/>
                <br />
                <br />
                <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="field" />
                <ErrorMessage name="confirmPassword"  className="errorMessage" />
                <br />
                <br />
                <button type="submit" id="btn">Sign Up</button>
            </Form>
        </Formik>
    );
};

export default Signup;