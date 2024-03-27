import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from 'yup';

import "./styles/AddCausePage.css"

const AddCausePage = () => {

    const [causeData, setCauseData] = useState({
        title: '',
        details: '',
        goal_amount: '',
        category: '',
        image: null // Add image field to state
    });

    const initialValues = {
        title: '',
        details: '',
        goal_amount: '',
        category: '',
        image: null // Initialize image field to null
    }

    const categories = ['Education', 'Health', 'Social welfare', 'Disaster Relief', 'Community Development', 'Other']; // Available categories

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        details: Yup.string().required('Details are required'),
        goal_amount: Yup.number().required('Goal Amount is required')
            .positive('Goal Amount must be a positive number')
            .integer('Goal Amount must be an integer'),
        category: Yup.string().required('Category is required'),
        image: Yup.mixed().required('Image is required') // Validate image field
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('details', values.details);
            formData.append('goal_amount', values.goal_amount);
            formData.append('category', values.category);
            formData.append('image', values.image); // Append image to FormData

            const res = await axios.post("http://localhost:3000/addCause", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set content type for FormData
                }
            });
            setCauseData(res);
        } catch (error) {
            console.log("Error getting data", error);
        }

        console.log("values", values);

        setSubmitting(false);
        alert("Submitted");

    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue }) => (
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

                    <Field as="select" id="category" name="category" className="field">
                        <option value="" disabled>Select category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="category" />
                    <br />
                    <br />

                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*" // Allow only image files
                        onChange={(event) => {
                            setFieldValue("image", event.currentTarget.files[0]); // Update image field value
                        }}
                    />
                    <ErrorMessage name="image" />
                    <br />
                    <br />

                    <button type="submit" id="btn">Add Cause</button>
                </Form>
            )}
        </Formik>
    );
}

export default AddCausePage;
