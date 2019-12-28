import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useInput } from './CustomHooks/InputHook'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hideLogin, { hideSignup } from './Hide.js';
import MainH from './MainH.js';
import MainS from './MainS.js';

const Button = styled.button`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`   
                                                            // supposed to go in UserForm parameters ", status"
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
    
    const [lVisible, setLVisible] = useState(true);
    const [currentUsertype, setCurrentUsertype] = useState("");
    const [currentUserID, setCurrentUserID] = useState();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [tickets, setTickets] = useState();
    const [linkTo, setLinkTo] = useState();

    useEffect(() => {  
        if (status != null) {
            console.log("status = " + status);    
            // get usertype/id of logging-in user 
            setCurrentUsertype(`${status.usertype}`);
            setCurrentUserID(`${status.id}`);
            console.log(`useEffect:  Today is ${currentDate}.`);
            console.log(`useEffect:  ${status.username}'s usertype is ${status.usertype}.  Loading profile, assigned tickets, and queue.`);
            // afterLogin(status.usertype);
            // TODO: another axios call to get list of tickets
            let url = `localhost:5000/tickets?submitid=${status.id}`;
            axios
                .get(url, values)
                .then(res => {
                    console.log(url);
                    console.log(`res response ${res.data[0]}`); // Data was created successfully and logs to console
                    console.log(`res array response ${[res]}`); // Data was created successfully and logs to console
                    setTickets(res.data);
                    console.log(`useEffect:  ${res.data[0].title}'s ticket category is ${res.data[0].category} and status is ${res.data[0].status}.  Loading profile, assigned tickets, and queue.`);
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
            });  
            
            setTickets([]);
            
            console.log(`current user type is ${status.usertype}`);

            if (status.usertype === "helper") { 
                // TODO:  if helper, return Profile & TicketListH
                    setLinkTo("/MainH");
            }
                // TODO:  if student, return Profile & TicketListS currentUsertype
            else { 
                    setLinkTo("/MainS");

            };
            }

    }, [status]);


    function toggleLVisible(){ 
        setLVisible(!lVisible);
    }

    
        if (window.location.pathname === '/signup' || window.location.pathname === '/MainS' || window.location.pathname === '/MainH' ) {
            console.log('hiding login');
            return null;
        }
        else {
            console.log('showing login');
            return (
                <div className='user-form'>
                    <Form>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <Field type="email" name="email" placeholder="Email" value={values.email} />
                        <Field type="password" name="password" placeholder="Password" value={values.password} />
                        {/*
                        <Link to={linkTo}>
                            <Button type="submit">Submit!</Button>                        
                        </Link>
                        */}
                        {
                            ( currentUsertype === "helper" )
                                ?
                                (< Link to="/MainH">
                                    <Button type="submit">Submit!</Button>
                                 </Link>)
                                :
                                (<Link to="/MainS">
                                    <Button type="submit">Submit!</Button>
                                 </Link >)
                        }
                    </Form>
                    {
                        // hide login form on click to sign up -- hideLogin();    
                    }
                    <div>
                        <Link to="/signup"><Button type="submit" onClick={toggleLVisible}>Register</Button></Link>
                    </div>
                </div>
            );
        }
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
        // statusT, currentUsertype, setCurrentDate, setCurrentUserID, setCurrentUsertype, setStatusT, 
    handleSubmit(values, { status, setStatus, resetForm, setErrors, setSubmitting }) {
        let url = `http://localhost:5000/userinfo?email=${values.email}`;
            axios
                .get(url, values)
                .then(res => {
                    console.log(url);
                    console.log(`res response ${res.data[0]}`); // Data was created successfully and logs to console
                    console.log(`res array response ${[res]}`); // Data was created successfully and logs to console
                    setStatus(res.data[0]);
                    console.log(values.email);
                    console.log(values);
                    console.log(`axios:  ${res.data[0].username}'s usertype is ${res.data[0].usertype}.  Loading profile, assigned tickets, and queue.`);
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                    setSubmitting(false);
            });  
                      
                   
    }

})(UserForm);

export default FormikForm;