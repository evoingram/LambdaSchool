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
  // fields: title, date, category, status, description, contact component
  // helper-only fields: resolved button, back to queue button
  // TODO: 2 Some form validation is in place.
  // TODO: 3 Form validation is in place for all fields, and covers all use cases. 
  // TODO: 2 Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. 
	// TODO: 3 Not only are standard network request techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.
	// TODO: 2 Student created functional components and used events in application to add dynamic functionality to app.
	// TODO: 2 Student's code was organized at the component level
	// TODO: 2 proper usage of state and props are demonstrated throughout the project
	// TODO: 2 the UI is composed of small reusable components
	// TODO: 2 proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented. 
	// TODO: 2 Student used Array methods to dynamically render HTML elements.
	// TODO: 2 Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. 
	// TODO: 2 Student has set up component management for the forms in the app that makes sense for each form. 
	// TODO: 3 Student showed great insight in setting up the state management for the app's forms. 
	// TODO: 3 Loading states and success/error notifications are in place and add to the overall UX of the app.
	// TODO: 3 Student was able to architect components to be easily reused. 
	// TODO: 3 Student used advanced React techniques like the composition pattern, custom hooks, render props, HOCs, etc.
	// TODO: 3 Student went above and beyond the project (search function?)
  // TODO: 
  // TODO: 
  
  // TODO: axios get request or parse response
  // TODO: ticket component displaying fields

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      character.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {
            searchResults.map(
              character => (
                <CharacterCard key={character.id} character={character} />
              )
            )
          }
        </ul>
      </div>
    </section>
    
  );
}

export default Ticket;