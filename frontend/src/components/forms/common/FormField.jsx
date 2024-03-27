import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormField = ({ name, type, placeholder }) => (
    <>
        <Field type={type} name={name} placeholder={placeholder} className="field" />
        <ErrorMessage name={name} component="div" className="errorMessage" />
    </>
);

export default FormField;
