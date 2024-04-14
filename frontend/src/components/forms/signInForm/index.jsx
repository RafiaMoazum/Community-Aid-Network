import React from "react";
import { Formik, Form } from "formik";
import FormField from "../common/FormField";
import loginValidationSchema from "./validationSchema";
import styles from "./styles.module.css";
import signInUser from "../../../api/signInApi";
import { useUserAuthContext } from "../../../context/userAuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useUserAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
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
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <FormField name="email" type="email" placeholder="Email"/>
          <div className={styles.passwordField}>
            <FormField
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              style={{width:"100%"}}
            />
            <img
              src={showPassword ? "/eye-close.png" : "/eye-open.png"}
              alt="Toggle Password Visibility"
              className={styles.togglePassword}
              onClick={togglePasswordVisibility}
            />
          </div>

          <button type="submit" className={styles.btn} id="btn">
            Sign In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignIn;
