import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useInput } from './CustomHooks/InputHook'
import styled from 'styled-components';
import loadForm from './old pages/Form.js/index.js';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const UserForm = ({ values, errors, touched, isSubmitting, status }) => {

    // TODO: 3 Not only are standard network request techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.
    
    // TODO: 3 Student showed great insight in setting up the state management for the app's forms. 
    // TODO: 2 proper usage of state and props are demonstrated throughout the project
    // TODO: 2 proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented. 
    
    // TODO: 2 Student used Array methods to dynamically render HTML elements.
    // TODO: 3 Loading states and success/error notifications are in place and add to the overall UX of the app.
    // TODO: 3 Student used advanced React techniques like the composition pattern, custom hooks, render props, HOCs, etc.
    
    // TODO: 3 Student was able to architect components to be easily reused. 
    // TODO: 2 Student created functional components and used events in application to add dynamic functionality to app.
    // TODO: 2 the UI is composed of small reusable components
    // TODO: 2 Student's code was organized at the component level
    // TODO: 2 Student has set up component management for the forms in the app that makes sense for each form. 
    
    const [user, setUser] = useState();
    useEffect(() =>{
        console.log(status);
        status && setUser(user => [...user, status]);
    }, [status]);

    function hideLogin() {

        // TODO:  hide login form on click to sign up
    }

    return (
        <div className='user-form'>      
        <Form>
            {touched.email && errors.email && <p>{errors.email}</p>}
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="email" name="email" placeholder="Email" value={values.email} />
            <Field type="password" name="password" placeholder="Password" value={values.password} />
            <Button type="submit">Submit!</Button>
        </Form>
        <div><Link to="/signup" onClick={hideLogin}>Don't have an account?  Sign up here.</Link></div>
        </div>
      
  );
}

    // TODO: 2 Some form validation is in place.
    // TODO: 3 Form validation is in place for all fields, and covers all use cases. 
    // TODO: 2 Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. 
    
const FormikForm = withFormik({    
    mapPropsToValues({ email, password }) {
        return {
        email: email || "",
        password: password || ""
        };
        },
        // validation schema
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Email not valid")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be 6 characters or longer")
                .required("Password is required"),
        }),
        
    // TODO: 2 Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. 

    handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
        
            axios
                .get("http://localhost:3000/userinfo?email=" + values.email, values)
                .then(res => {
                    console.log("login response = " + res.data); // Data was created successfully and logs to console
                    setStatus(res.data);
                    resetForm();
                    setSubmitting(false);
                    loadForm();
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                    setSubmitting(false);
                });                
                   
    }

})(UserForm);

export default FormikForm;