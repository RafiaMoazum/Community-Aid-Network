import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contactNumber: Yup.string()
      .matches(/^[0-9+]*$/, 'Invalid contact number')
      .min(10, 'Contact number must be at least 10 characters')
      .max(15, 'Contact number must be at most 15 characters'),
    password: Yup.string()
      .matches(/^(?=.*\d)(?=.*[A-Z]).{8,}$/, 'password contains at least one digit, at least one uppercase letter, and is at least 8 characters long. ')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
});

export default validationSchema;
