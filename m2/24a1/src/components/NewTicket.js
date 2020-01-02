import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useInput } from './InputHook.js'
import styled from 'styled-components';
import loadForm from './Hide.js';

const Button = styled.button`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`
    
const Ticket = ({ profile, currentUserID, values, errors, touched, isSubmitting, status, setSearchResults, setTickets }) => {

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
    

    const {value:tickets, hook:bindTickets} = useInput('')

    return (
        <div className='user-form'>      
            <Form>
                {touched.title && errors.title && <p>{errors.title}</p>}
                {touched.date && errors.date && <p>{errors.date}</p>}
                {touched.category && errors.category && <p>{errors.category}</p>}
                {touched.statusT && errors.statusT && <p>{errors.statusT}</p>}
                {touched.description && errors.description && <p>{errors.description}</p>}
                <div id="complete"></div>
                <Field type="text" name="title" placeholder="ticket title" value={values.title} />
                <Field type="text" name="category" placeholder="category of problem" value={values.category} />
                <Field type="text" name="description" placeholder="What have you tried?" value={values.description} />
                <Button type="submit">Save</Button>
            </Form>
        </div>
        
    );
}
/*
    <Field type="text" name="username" placeholder={props.currentUsername} value={values.currentUsername} />
    <Field type="text" name="usertype" placeholder="Student" value={values.currentUsertype} />
*/

  // TODO: 2 Some form validation is in place.
  // TODO: 3 Form validation is in place for all fields, and covers all use cases. 
	// TODO: 2 Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. 
const FormikForm = withFormik({    
    mapPropsToValues({ profile, submitid, date, title, category, statusT, description }) {
        console.log(profile.id);
        const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return {
        title: title || "",
        date: (new Date()).toLocaleDateString('en-US', dateOptions) || (new Date()).toLocaleDateString('en-US', dateOptions),
        category: category || "",
        status: "queue" || "queue",
        description: description || "",
        submitid: profile.id || profile.id,
        helperid: "" || "",
        description: description || ""
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
    async handleSubmit(values, { submitid, currentUserID, setSearchResults, setTickets, setStatus, resetForm, setErrors, setSubmitting }) {
            await axios
                .post("http://localhost:5000/tickets/", values)
                .then(res => {
                    console.log("login response = " + res.data); // Data was created successfully and logs to console
                    setStatus(res.data);
                    document.getElementById("complete").textContent = "Your ticket has been submitted."; 
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                    setSubmitting(false);
                });           
        
                
            let url = `http://localhost:5000/tickets?submitid=${values.submitid}`;
            console.log(url);
            await axios
                .get(url)
                .then(res => {
                    console.log("form response = ");
                    console.log(res.data);
                    console.log("form tickets = " + res.data);
                    
                    setTickets(res.data);
                    setSearchResults(res.data);




                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                });

                   
    }

})(Ticket);

export default FormikForm;