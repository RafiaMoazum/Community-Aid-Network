import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import volunteerApplicationSchema from "./validationSchema";


const ApplyAsVolunteer =  () => {
    const initialValues = {
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        cnic: '', 
        dateOfBirth: '',
        areasOfInterest: [], 
        availability: [], 
        previousVolunteeringExperience: [],
        relevantSkills: '',
        currentEducationLevel: '',
        whyDoYouWantToVolunteer: '',
        specialNeedsRequirements: '',
      };

      const handleSubmit = (values) => {

      }

    return (
        <Formik validationSchema={volunteerApplicationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="volunteer-form">
          <h2 className="form-title">Apply as a Volunteer</h2>

          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Full Name:</label>
            <Field name="fullName" type="text" className="form-control" />
            <ErrorMessage name="fullName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <Field name="phoneNumber" type="text" className="form-control" />
            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">Address:</label>
            <Field name="address" type="text" className="form-control" />
            <ErrorMessage name="address" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="cnic" className="form-label">CNIC:</label>
            <Field name="cnic" type="text" className="form-control" />
            <ErrorMessage name="cnic" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
            <Field name="dateOfBirth" type="date" className="form-control" />
            <ErrorMessage name="dateOfBirth" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="areasOfInterest" className="form-label">Areas of Interest:</label>
            <Field name="areasOfInterest" as="select" multiple className="form-control">
              <option value="fundraising">Fundraising</option>
              <option value="eventManagement">Event Management</option>
              <option value="generalOffice">General Office Work</option>
            </Field>
            <ErrorMessage name="areasOfInterest" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="availability" className="form-label">Availability:</label>
            <Field name="availability" as="select" multiple className="form-control">
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
            </Field>
            <ErrorMessage name="availability" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="previousVolunteeringExperience" className="form-label">Previous Volunteering Experience:</label>
            <Field name="previousVolunteeringExperience" as="textarea" className="form-control" />
            <ErrorMessage name="previousVolunteeringExperience" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="relevantSkills" className="form-label">Relevant Skills:</label>
            <Field name="relevantSkills" type="text" className="form-control" />
            <ErrorMessage name="relevantSkills" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="currentEducationLevel" className="form-label">Current Education Level:</label>
            <Field name="currentEducationLevel" type="text" className="form-control" />
            <ErrorMessage name="currentEducationLevel" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="whyDoYouWantToVolunteer" className="form-label">Why do you want to volunteer?</label>
            <Field name="whyDoYouWantToVolunteer" as="textarea" className="form-control" />
            <ErrorMessage name="whyDoYouWantToVolunteer" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="specialNeedsRequirements" className="form-label">Special Needs/Requirements:</label>
            <Field name="specialNeedsRequirements" as="textarea" className="form-control" />
            <ErrorMessage name="specialNeedsRequirements" component="div" className="error-message" />
          </div>

          <button type="submit" className="submit-button">Submit Application</button>
        </Form>
        </Formik>
    )
}

export default ApplyAsVolunteer;