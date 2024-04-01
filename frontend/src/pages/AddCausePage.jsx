import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import styles from "./styles/addCause.module.css"

const AddCausePage = () => {
    const [selectedFileName, setSelectedFileName] = useState('');

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

    const categories = ['Education', 'Health Care', 'Basic Needs Support', 'Support for Earning','Disaster Relief', 'Community Development', 'Other']; // Available categories

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

            const token = localStorage.getItem('token');

            const res = await axios.post("http://localhost:3000/addCause", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
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
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
                <Form className={styles.mainFormContainer}>
                    <div className={styles.formContainer}>
                    <h2 className={styles.formHeading}>Add Cause</h2>
                    <Field type="text" name="title" placeholder="Title" className={styles.field} />
                    <ErrorMessage name="title" component="div" className={styles.errorMessage} />

                    <Field type="text" name="details" placeholder="Details" className={styles.field} />
                    <ErrorMessage name="details" component="div" className={styles.errorMessage} />

                    <Field type="number" name="goal_amount" placeholder="Goal Amount" className={styles.field} />
                    <ErrorMessage name="goal_amount" component="div" className={styles.errorMessage} />

                    <Field as="select" name="category" className={`${styles.field} ${styles.selectField}`}>
                        <option value="" disabled>Select category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="category" component="div" className={styles.errorMessage} />

                    <div className={styles.actions}>
    <label htmlFor="image" className={styles.uploadBtn}>Choose File</label>
    <input 
        type="file" 
        id="image" 
        name="image" 
        accept="image/*" 
        className={styles.fileInputHidden} 
        onChange={(event) => {
            setFieldValue("image", event.currentTarget.files[0]);
            setSelectedFileName(event.currentTarget.files[0].name);
        }} 
    />
    {selectedFileName && (
        <div className={styles.result}>
            <div className={styles.fileUploaded}>
                <p>{selectedFileName}</p>
                <div 
                    className={styles.fileRemove} 
                    onClick={() => {
                        setFieldValue("image", null);
                        setSelectedFileName('');
                    }}
                >X</div>
            </div>
        </div>
    )}
</div>

                    <button type="submit" className={styles.submitButton}>Add Cause</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default AddCausePage;
