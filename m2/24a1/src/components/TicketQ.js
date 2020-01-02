import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useInput } from './CustomHooks/InputHook'
import styled from 'styled-components';
import loadForm from './Hide.js';

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
const H1 = styled.h1`
    color: #383651;
    font-size: 2.5rem;
    width: 100%;
    justify-content: center;
    text-align: center;
`
const Div = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
const Button = styled.button`
  background: #bb1333;
  border-radius: 3px;
  border: 2px solid #383651;
  color: #ffffff;
  font-weight: bold;
  margin: 1em;
  padding: 1em 2em;
`  
const ButtonRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
`

const fieldLength = {
        "width": "97%",
        "margin": "0",
        "padding": "0"
}
const Ticket = ({ profile, ticket, values, errors, touched, isSubmitting, status }) => {

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
  
  values.title = ticket.title
  values.date = ticket.date
  console.log(values.date);
  values.category = ticket.category
  values.statusT = ticket.status
  values.description = ticket.description
  
  function updateTicket(ticketID, currentTicketStatus, event) {
    if (currentTicketStatus === "resolved" && event.target.id === "btnR" + ticketID) { 
      console.log(event.target.id);
      ticket.status = "resolved"
    }
    if (currentTicketStatus === "queue" && event.target.id === "btnQ" + ticketID) { 
      console.log(event.target.id);
      ticket.status = "queue"
    }
    console.log("ticketID = " + ticketID);
    console.log("values = " + values);
    let url = `http://localhost:5000/tickets/${ticketID}`;
    axios.defaults.headers.put['Content-Type'] = 'application/json';
    let axiosConfig = {
      "url": `http://localhost:5000/tickets/${ticketID}`,
      "method": "PUT",
      "headers":{"Content-Type": "application/json"},
      "body": values
  }
    axios
      .put(url, {"status": values.statusT}, axiosConfig) 
      .then(res => {
        console.log("res = " + res);
        console.log({"id": ticketID, "title": ticket.title, "date": ticket.date, "category": ticket.category, "status": values.statusT, "description": ticket.description, "submitid": ticket.submitid, "helperid": ticket.helperid});
      
      })
      .catch(err => {
        console.log(err); // logs error creating the data 
        console.log({id: ticketID, title: ticket.title, date: ticket.date, category: ticket.category, status: values.statusT, description: ticket.description, submitid: ticket.submitid, helperid: ticket.helperid});
      });  

  }
  // TODO: Add name/slack username of submitter
  return (
      <Div1>
        <H1>Ticket:</H1>
        <Form>
            {touched.title && errors.title && <p>{errors.title}</p>}
            {touched.date && errors.date && <p>{errors.date}</p>}
            {touched.category && errors.category && <p>{errors.category}</p>}
            {touched.statusT && errors.statusT && <p>{errors.statusT}</p>}
            {touched.description && errors.description && <p>{errors.description}</p>}
        <Div>
            <FormField>
              <Label>Title:</Label>
              <SCField>
                <Field type="text" name="title" placeholder={ticket.title} value={values.title} style={fieldLength} />
              </SCField>          
            </FormField>
            <FormField>
              <Label>Date Submitted:</Label>
              <SCField>
                <Field type="text" name="date" placeholder={ticket.date} value={values.date} style={fieldLength} />
              </SCField>          
            </FormField>
            <FormField>
              <Label>Category:</Label>
              <SCField>
                <Field type="text" name="category" placeholder={values.category} value={values.category} style={fieldLength} />
              </SCField>          
            </FormField>
            <FormField>
              <Label>Status:</Label>
              <SCField>
                <Field type="text" name="statusT" placeholder={values.statusT} value={values.statusT} style={fieldLength} />
              </SCField>          
            </FormField>
            <FormField>
              <Label>What Student Tried:</Label>
              <SCField>
                <Field type="text" name="description" placeholder={values.description} value={values.description} style={fieldLength} />
              </SCField>          
            </FormField>
        </Div>
            <ButtonRow>
              <Button type="submit">Save</Button>
              <Button type="submit" id={"btnR" + ticket.id} onClick={(event)=>updateTicket(ticket.id, "in progress", event)}>Help Student</Button>
            </ButtonRow>
          </Form>
        </Div1>
  );
}

  // TODO: 2 Some form validation is in place.
  // TODO: 3 Form validation is in place for all fields, and covers all use cases. 
	// TODO: 2 Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. 
const FormikForm = withFormik({    
    mapPropsToValues({ submitid, date, title, category, statusT, description }) {
        return {
        submitid: submitid || "",
        date: date || "",
        title: title || "",
        category: category || "",
        statusT: statusT || "",
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
    handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
        
            axios
                .get("http://localhost:5000/tickets?status=queue")
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