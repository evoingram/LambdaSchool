import React, { useState, useEffect, Profiler } from "react";
import hideLogin, { hideSignup } from "./Hide";
import { Link } from 'react-router-dom';
import TicketH from './TicketH.js';
import styled from 'styled-components';
// import Ticket from '../components/Ticket.js';

const Button = styled.button`
  background: #bb1333;
  border-radius: 3px;
  border: 2px solid #383651;
  color: #ffffff;
  font-weight: bold;
  margin: 1em;
  padding: 1em 2em;
`   
const H1 = styled.h1`
    color: #383651;
    font-size: 2.5rem;
    margin-left: 3%;
`
const FormField = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
    flex-wrap: nowrap;
`
const Form = styled.form`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 5%;
`
const Label = styled.label`
    color: #383651;
    font-size: 1.5rem;
    text-align: center;
`

const SCField = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
`
const Center = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
`
const Div1 = styled.div`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    margin-right: 12.5%;
`

const fieldLength = {
    "color": "#383651",
    "font-size": "1.5rem",
    "width": "97%",
    "margin-left": "-3%",
    "margin-bottom": "3%",
    "padding-bottom": "0"
}
    // TODO: 3 Not only are standard network request techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.
  
	  // TODO: 3 Student showed great insight in setting up the state management for the app's forms. 
	  // TODO: 2 proper usage of state and props are demonstrated throughout the project
    // TODO: 2 proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented. 
  
    // TODO: 3 Student went above and beyond the project (search function?)
    // TODO: 3 Student incorporated a third party event/animation library like unto Greensock, Anime, React-motion etc.
    // TODO: 2 Student used Array methods to dynamically render HTML elements.
	  // TODO: 3 Loading states and success/error notifications are in place and add to the overall UX of the app.
    // TODO: 3 Student used advanced React techniques like the composition pattern, custom hooks, render props, HOCs, etc.
    
    // TODO: 3 Student was able to architect components to be easily reused. 
	  // TODO: 2 Student created functional components and used events in application to add dynamic functionality to app.
	  // TODO: 2 the UI is composed of small reusable components
	  // TODO: 2 Student's code was organized at the component level
    // TODO: 2 Student has set up component management for the forms in the app that makes sense for each form. 

// hide current page when login showing
hideLogin();
// hide current page when sign-up showing
hideSignup();

const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    if (props.tickets != null) {
      const results = props.tickets.filter(ticket =>
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.category.toLowerCase().includes(searchTerm.toLowerCase())  ||
        ticket.date.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      console.log("useEffect Search Results = " + results);
      setSearchResults([...results]);
    }
  }, [searchTerm, props.tickets]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  console.log("profile id = " + props.profile.id);
  return (
        <Center>  
          <H1>Your Tickets:  </H1>
            <Form>
                <Label htmlFor="name">Search:</Label>
                <input
                  id="name"
                  type="text"
                  name="textfield"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleChange}
                  style={fieldLength}
                />
                {
                  searchResults.map(
                    ticket => (
                      <Link to="/ticket"><TicketH key={ticket.id} ticket={ticket} /></Link>
                    )
                  )
        }
            </Form>
    </Center>
    
  );
}

export default SearchForm;