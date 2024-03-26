import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./styles/AddCausePage.css"

const AddCausePage = () => {
    const initialValues = {
        title: '',
        details: '',
        goal_amount: '',
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        details:Yup.string().required('Details are required'),
        goal_amount: Yup.number().required('Goal Amount is required')
        .positive('Goal Amount must be a positive number')
        .integer('Goal Amount must be an integer')    });

    const handleSubmit =(values, { setSubmitting }) =>{
        console.log("values", values);
        setSubmitting(false); 
        alert("Submitted")
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form id="form">
                <p id="heading">Add Cause</p>
                <Field type="text" id="title" name="title" placeholder="Title" className="field" />
                <ErrorMessage name="title" />
                <br />
                <br />
                <Field type="text" id="details" name="details" placeholder="Details" className="field" />
                <ErrorMessage name="details" />
                <br />
                <br />
                <Field type="number" id="goal_amount" name="goal_amount" placeholder="Goal Amount" className="field" />
                <ErrorMessage name="goal_amount" />
                <br />
                <br />
                <button type="submit" id="btn">Add Cause</button>
            </Form>
        </Formik>
    );
}
 
export default AddCausePage;