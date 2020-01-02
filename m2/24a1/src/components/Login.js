import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useInput } from './CustomHooks/InputHook'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainLoad from './MainLoad.js';
import setSearchResults from './SearchForm.js';

const Button = styled.button`
  background: #bb1333;
  border-radius: 3px;
  border: 2px solid #383651;
  color: #ffffff;
  font-weight: bold;
  margin: 0 1em;
  padding: 1em 2em;
`   

const LoginFormatting = styled.form`
    display: flex;
    color: #4C5962;
    font-weight: bold;
    margin: 1em;
    justify-content: center;
    align-items: center;
    width: 95%;
`              
const Div = styled.div`
    padding: 1em;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`
                 
const H1 = styled.h1`
    color: #383651;
    font-size: 1rem;
`
             
const Div1 = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2%;
    padding-bottom: 2%;
    margin: 0;
    border-bottom: 2px solid #383651;
    border-top: 2px solid #383651;
`
const FormField = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
    flex-wrap: nowrap;
`
const Label = styled.label`
    width: 40%;
    margin: 0;
    padding: 0;
    justify-content: right;
    text-align: right;
    padding-right: 1%;
    text-decoration: none;
`
const SCField = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
`
const ButtonRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-evenly;
    margin: 0;
    padding: 2%;
`

const fieldLength = {
        "width": "97%",
        "margin": "0",
        "padding": "0"
}       
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
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [lVisible, setLVisible] = useState(true);
    const [currentUsertype, setCurrentUsertype] = useState("student");
    const [currentUserID, setCurrentUserID] = useState("student");
    const [ticketURL, setTicketURL] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());
    const [tickets, setTickets] = useState([]);
    const [ticketsQ, setTicketsQ] = useState([]);
    const [profile, setProfile] = useState([]);
    useEffect((props) => {  
        if (status != null) {
            // get usertype/id of logging-in user 
            setCurrentUsertype(`${status.usertype}`);
            setCurrentUserID(`${status.id}`);
            setProfile({
                id: status.id,
                name: status.name,
                username: status.username,
                email: status.email,
                password: status.password,
                usertype: status.usertype
            });
            // TODO: another axios call to get list of tickets
            let url;
            if (status.usertype === "helper") { 
                url = `http://localhost:5000/tickets?status=queue`;
                axios
                    .get(url)
                    .then(res => {
                        setTicketsQ(res.data);

                    })
                    .catch(err => {
                        console.log(err); // logs error creating the data 
                    });             
                setTicketURL(`http://localhost:5000/tickets?helperid= & ${status.id}`);   
                url = `http://localhost:5000/tickets?helperid=${status.id}`;
            }
            else { 
                setTicketURL(`http://localhost:5000/tickets?submitid=${status.id}`);
                url = `http://localhost:5000/tickets?submitid=${status.id}`;
            }
            setLoggedIn(!loggedIn);
            
            axios
                .get(url)
                .then(res => {
                    setTickets(res.data);
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                });  

        }
    }, [status, tickets, currentDate, ticketsQ, loggedIn]);

    function toggleLVisible(){ 
        setLVisible(!lVisible);
    }
    
    if (window.location.pathname === '/signup') {
        return null;
    }
    else if (loggedIn === true) { 
        return (<MainLoad currentUsertype={currentUsertype} ticketURL={ticketURL} tickets={tickets} ticketsQ={ticketsQ} profile={profile} searchResults={tickets} setSearchResults={setSearchResults}/>);
    }
    else {
        return (
      <Div>
                <H1>Login or Register for an account to view and submit tickets:</H1>
                <LoginFormatting>
                    <Form>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        {touched.password && errors.password && <p>{errors.password}</p>}
            <FormField>
              <Label>Email:</Label>
              <SCField>
                        <Field type="email" name="email" placeholder="Email" value={values.email} style={fieldLength} />
              </SCField>          
            </FormField>
            <FormField>
              <Label>Password:</Label>
              <SCField>
                        <Field type="password" name="password" placeholder="Password" value={values.password} style={fieldLength} />
              </SCField>          
            </FormField>
            <ButtonRow>
                        <Button type="submit">Log In</Button>
                        <Link to="/signup"><Button type="submit" onClick={toggleLVisible}>Register</Button></Link>
            </ButtonRow>
                    </Form>
                </LoginFormatting>
            </Div>
        );
    }
    
}
let FormikForm;
    // TODO: 2 Some form validation is in place.
    // TODO: 3 Form validation is in place for all fields, and covers all use cases. 
    // TODO: 2 Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. 
if (UserForm.loggedIn === true) { 
    FormikForm = () => { return (<MainLoad />); };        
}
else {
    FormikForm = withFormik({    
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
            // statusT, currentUsertype, setCurrentDate, setCurrentUsertype, setStatusT, 
        handleSubmit(values, { status, setStatus, resetForm, setErrors, setSubmitting }) {
            let url = `http://localhost:5000/userinfo?email=${values.email}`;
            axios
                .get(url, values)
                .then(res => {
                    setStatus(res.data[0]);
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                    setSubmitting(false);
                });
            
                

        }
    })(UserForm);
};

export default FormikForm;