import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import "./styles/AddCausePage.css"

const AddCausePage = () => {
    const navigate=useNavigate();
    const [causeData, setCauseData] = useState({
        title: '',
        details: '',
        goal_amount: '',
        category: '',
        image: null 
    });

    const initialValues = {
        title: '',
        details: '',
        goal_amount: '',
        category: '',
        image: null 
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
            formData.append('image', values.image); 

            const res = await axios.post("http://localhost:3000/addCause", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            });
            setCauseData(res);
        } catch (error) {
            console.log("Error getting data", error);
        }

        console.log("values", values);

        setSubmitting(false);
        alert("Submitted");
       navigate("/");
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
                        accept="image/*" 
                        onChange={(event) => {
                            setFieldValue("image", event.currentTarget.files[0]); 
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
