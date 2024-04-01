import React from "react";
import { Formik, Form } from "formik";
import FormField from "../common/FormField";
import loginValidationSchema from "./validationSchema";
import styles from './styles.module.css'
import signInUser from "../../../api/signInApi";
import { useUserAuthContext } from "../../../context/userAuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const { storeTokenInLS } = useUserAuthContext();

    const initialValues = {
        email: "",
        password: ""
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            console.log("Login Form Submit is running");
            const { token } = await signInUser(values); // Using await here requires the function to be async
            storeTokenInLS(token);
            console.log("You are Signed in", token);
            resetForm();
            navigate("/"); // Navigate after successful login
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
            <Form className={styles.mainForm}>
                <div className={styles.form}>
                    <p className={styles.title}>Sign In</p>
                    <FormField name="email" type="email" placeholder="Email" />
                    <FormField name="password" type="password" placeholder="Password" />
                    <button type="submit" className={styles.btn} id="btn">Sign In</button>
                </div>
            </Form>
        </Formik>
    );
};

export default SignIn;
