import React, { useState, useEffect } from 'react';
// import { useInput } from './CustomHooks/InputHook'
// import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import hideLogin from './Hide.js';
import hideSignup from './Hide.js';
import SearchForm from './SearchForm.js';
import Ticket from './Ticket.js';
import TicketH from './TicketH.js';
import HeaderQ from './HeaderQ.js';
import tickets from './Login.js'


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

const TicketListQ = props => {
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
    
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // hide current page when login showing
  hideLogin();
  // hide current page when sign-up showing
  hideSignup();
  
      // TODO: 3 Student went above and beyond the project (search function?)
      // TODO: ticket component linked to open ticket
  console.log("TLQ tickets = " + props.ticketsQ);

  return (
    <section className="search-form">
      <HeaderQ />
    <SearchForm />
      <div className="character-list">
        {
            props.ticketsQ.map(
              ticket => (
                <Link to="/ticket"><TicketH key={ticket.id} ticket={ticket} /></Link>
              )
            )
          }
      </div>
    </section>
    
  );
}

/*

            // afterLogin(status.usertype);
            console.log(`${status.id}`);
            // TODO: another axios call to get list of tickets
            let url = `http://localhost:5000/tickets?submitid=${status.id}`;

            console.log("tickets url = " + url);
            axios
                .get(url)
                .then(res => {
                    console.log(`ticket response ${res.data[0]}`); // Data was created successfully and logs to console
                    console.log(`ticket array response ${res.data}`); // Data was created successfully and logs to console
                    setTickets([...res.data]);
                    console.log(`useEffect:  ${res.data[0].title}'s ticket category is ${res.data[0].category} and status is ${res.data[0].status}.  Loading profile, assigned tickets, and queue.`);

                    console.log(`current user type is ${status.usertype}`);
                    console.log(`main page loading for a ${status.usertype}`);


                    if (status.usertype === "helper") {
                        // TODO:  if helper, return Profile & TicketListH
                        console.log(`tickets = " + ${tickets}`);    
                    window.location.pathname = "/MainH";
                        // return (<MainH />);
                    }
                    else { 
                        console.log(`tickets = " + ${tickets}`);    
                        window.location.pathname = "/MainS";
                        // return (<MainS />);
                    }

                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
            });  
            
            
        }

*/

export default TicketListQ;


