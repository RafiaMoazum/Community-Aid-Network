import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from '../registrationForm/style.module.css'

const FormField = ({ name, type, placeholder }) => (
    <>
        <Field type={type} name={name} placeholder={placeholder} className={styles.field} style={{width:"100%"}}/>
        <ErrorMessage name={name} component="div" className="errorMessage" />
    </>
);

export default FormField;
