import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    // Adjusted CNIC validation for either 13 digits or formatted with dashes
    cnic: Yup.string().matches(
      /^(?:\d{5}-\d{7}-\d{1}|\d{13})$/, 
      'CNIC is invalid (should be 13 digits or formatted as XXXXX-XXXXXXX-X)'
    ).required('CNIC is required'),
    contactNumber: Yup.string()
      .matches(/^[0-9+]*$/, 'Invalid contact number')
      .min(10, 'Contact number must be at least 10 characters')
      .max(15, 'Contact number must be at most 15 characters'),
    // Updated password validation to require at least one special character
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/, 
        'Password must contain at least one number, one uppercase letter, and one special character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
});

export default validationSchema;
