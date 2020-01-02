import React, { useState, useEffect } from "react";
import hideLogin, { hideSignup } from "./Hide";
// import { Link } from 'react-router-dom';
import TicketQ from './TicketQ.js';
import styled from 'styled-components';
// import Ticket from '../components/Ticket.js';

const H1 = styled.h1`
    color: #383651;
    font-size: 2.5rem;
    margin-left: 3%;
    text-align: center;
    width: 100%;
    justify-content: center;
    text-align: center;
`
const Form = styled.form`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 5%;
`
const Center = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
    border-top: 2px solid #383651;
    border-bottom: 2px solid #383651;
`
const Div1 = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const fieldLength = {
    "color": "#383651",
    "font-size": "1.5rem",
    "width": "100%",
    "margin": "2%",
    "padding": "0"
}
const SearchDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`
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


    // // TODO:  make each list headline clickable to expand height

// hide current page when login showing
hideLogin();
// hide current page when sign-up showing
hideSignup();

const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    if (props.ticketsQ != null) {
      const results = props.ticketsQ.filter(ticket =>
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.category.toLowerCase().includes(searchTerm.toLowerCase())  ||
        ticket.date.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      console.log("useEffect Search Results = " + results);
      setSearchResults([...results]);
    }
  }, [searchTerm, props.ticketsQ]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  console.log("profile id = " + props.profile.id);

  function expandListQ() {
    let listToExpand = document.getElementById("searchFormQ");
    console.log("ticketListH height = " + listToExpand.style.height);
    let currentDisplay = listToExpand.style.display;
    console.log(currentDisplay);
    let expandDivText = document.getElementById("expandListTextQ");
    if (currentDisplay != "none") {
      listToExpand.style.display = "none";
      listToExpand.style.height = "0%";
      expandDivText.textContent = "click header to show ticket queue"
    }
    else {
      listToExpand.style.display = "flex";
      listToExpand.style.height = "100%";
      expandDivText.textContent = "click header to hide ticket queue"
    }
  }
  return (
    <Center>  
      <Div1>
        <div id="expandListTextQ" style={{ color: '#86929d', fontSize: '0.75rem', fontStyle: 'italic' }}>click header to show ticket queue</div>
        <H1 onClick={expandListQ} onLoad={expandListQ} >Ticket Queue:  </H1>
        <Form id="searchFormQ" style={{display: 'none', height: '0%'}}>
          <SearchDiv>
                  <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    style={fieldLength}
            />
            </SearchDiv>
                  {
                    searchResults.map(
                      ticket => (
                          <TicketQ key={ticket.id} ticket={ticket} />
                      )
                    )
          }
        </Form>
      </Div1>
    </Center>
    
  );


}

export default SearchForm;