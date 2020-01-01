import React from 'react';
// import { useInput } from './CustomHooks/InputHook'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hideLogin from './Hide.js';
import hideSignup from './Hide.js';
import SearchForm from './SearchForm.js';
import TicketH from './TicketH.js';
import HeaderH from './HeaderH.js';

/*
const Button = styled.button`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`
*/

const TicketListS = props => {
  //fields: static header, ticket component
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
      // TODO: 3 Student went above and beyond the project (search function?)
      // TODO: ticket component linked to open ticket
  return (
    <section className="search-form">
      <SearchForm tickets={props.tickets} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
      <HeaderH />
      <div className="character-list">
        <ul>
          {
            props.searchResults.map(
              ticket => (
                <Link to="/ticket"><TicketH key={ticket.id} ticket={ticket} /></Link>
              )
            )
          }
        </ul>
      </div>
    </section>
    
  );
}

export default TicketListS;