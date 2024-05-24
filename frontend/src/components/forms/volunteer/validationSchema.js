import * as Yup from 'yup';

const volunteerApplicationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full name is required.'),
    email: Yup.string()
      .email('Enter a valid email.')
      .required('Email is required.'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "xyz.")
      .min(10, 'Phone number must be at least 10 digits long.')
      .max(13, 'number mustbe below 13 characters')
      .required('Phone number is required.'),
    address: Yup.string()
      .required('Address is required.'),
    cnic: Yup.string()
      .matches(/^[0-9]{13}$/, 'CNIC must be exactly 13 digits.')
      .required('CNIC is required.'),
    dateOfBirth: Yup.date()
      .max(new Date(), 'Date of birth cannot be in the future.')
      .required('Date of birth is required.'),
    areasOfInterest: Yup.array()
      .of(Yup.string())
      .min(1, 'Select at least one area of interest.')
      .required('At least one area of interest is required.'),
    availability: Yup.array()
      .of(Yup.string())
      .min(1, 'Select at least one availability slot.')
      .required('Availability is required.'),
    previousVolunteeringExperience: Yup.array()
      .of(Yup.string()),
    relevantSkills: Yup.string(),
    currentEducationLevel: Yup.string()
      .required('Current education level is required.'),
    whyDoYouWantToVolunteer: Yup.string()
      .required('This field is required.'),
    specialNeedsRequirements: Yup.string(),
  });
  
  export default volunteerApplicationSchema;