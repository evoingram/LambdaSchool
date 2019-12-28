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

const Ticket = props => {

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
  
  // fields: title, date, category, status, description, contact component
  // helper-only fields: resolved button, back to queue button
  
  // TODO: ticket component displaying fields

      const [user, setUser] = useState();
    useEffect(() =>{
        console.log(status);
      status && setUser(user => [...user, status]);
      
    }, [status]);

    function hideLogin() {
      // hide current page when login showing
      if (window.location.pathname === '/login') return null;
      // hide current page when sign-up showing
      if (window.location.pathname === '/signup') return null;
    }

    return (
        <div className='user-form'>      
          <Form>
            {touched.title && errors.title && <p>{errors.title}</p>}
            {touched.date && errors.date && <p>{errors.date}</p>}
            {touched.category && errors.category && <p>{errors.category}</p>}
            {touched.status && errors.status && <p>{errors.status}</p>}
            {touched.description && errors.description && <p>{errors.description}</p>}
            {
              // TODO: possibly the following two lines should go in another component???
            }
            <Field type="text" name="username" placeholder="username" value={values.username} />
            <Field type="text" name="usertype" placeholder="Student" value={values.usertype} />
            
            <Field type="text" name="title" placeholder="title" value={values.title} />
            {
              // TODO: not enterable, auto-date
            }
            <Field type="date" name="date" placeholder="John or Jane Doe" value={values.date} />
            <Field type="text" name="category" placeholder="category" value={values.category} />
            <Field type="text" name="status" placeholder="status" value={values.status} />
            <Field type="text" name="description" placeholder="What I've Tried This Time" value={values.description} />
            <Button type="submit">Save</Button>
            {
              // TODO: helper only
            }
            <Button type="submit">Resolved</Button>
            {
              // TODO: helper only
            }
            <Button type="submit">Send to Queue</Button>
          </Form>
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
            title: Yup.string()
                .min(2, "Title must be two characters or longer.")
                .required("Title is required"),
            category: Yup.string()
                .min(2, "Category must be two characters or longer.")
                .required("Category is required"),
            description: Yup.string()
                .min(6, "Description must be 6 characters or longer")
                .required("Description is required"),
    }),

  // TODO: 2 Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. 
  // TODO: axios get request or parse response
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

})(Ticket);

export default FormikForm;