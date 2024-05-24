import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import FormField from '../common/FormField';
import validationSchema from './validationSchema';
import styles from './style.module.css'
import { Container} from 'react-bootstrap';
import  registerUser  from '../../../api/registrationApi';
import Background from '../../../assets/images/registeration-bg.png'

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)

    const initialValues = {
        name: '',
        email: '',
        address:'',
        cnic: '',
        contactNo: '',
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
            alert("Error in Registration")

        } finally {
            setSubmitting(false);
        }
        alert("User Registered")

    };

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <Container fluid style={{minHeight:"1000px"}}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className={styles.mainForm} >
                <div className={styles.sideImage}>
                    <img src={Background} alt="" srcset="" />
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.form}>
                    <p className={styles.heading}>Sign Up</p>
                    <FormField name="name" type="text" placeholder="Name" />
                    <FormField name="email" type="email" placeholder="Email" />
                    <FormField name="address" type="address" placeholder="Address" />
                    <FormField name="cnic" type="text" placeholder="CNIC" />
                    <FormField name="contactNo" type="text" placeholder="Contact Number" />
                    <div className={styles.passwordField}>
                    <FormField name="password" type= {showPassword? "text": "password"} placeholder="Password" />   
                    <img src={showPassword ? "/eye-close.png" : "/eye-open.png"} alt="TogglePasswordVissibility" className={styles.togglePassword} onClick={togglePassword}/>
                    </div>
                    <FormField name="confirmPassword" type={showPassword? "text": "password"} placeholder="Confirm Password" />
                    <button type="submit" className={styles.btn}> Sign Up </button>
                    </div>
                </div>
                
            </Form>
        </Formik>
        </Container>
    );
};

export default Signup;
