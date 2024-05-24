import * as Yup from 'yup';

const loginValidationSchema = Yup.object(
    {
        email: Yup.string().email('Invalid Email Address').required('Email is Required'),
        password: Yup.string().required('Enter the password')

    }
)

export default loginValidationSchema