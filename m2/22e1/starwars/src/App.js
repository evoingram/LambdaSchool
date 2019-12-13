import React, {useState, useEffect, Component} from "react"; 
import ReactDOM from "react-dom";
import "./App.css";
import styled from 'styled-components';
import axios from 'axios';

const SWLinks = styled.a`
  color: white;
  font-weight: bold;
`
const BioData = styled.div`
  display: flex;
  color: #69e4ea;
  font-weight: bold;
  -webkit-font-stroke: 2px black;
  background-color: black;
`

const CustomData = styled.span`
  display: flex;
  color: #eaea69;
  font-weight: bold;
  background-color: black;
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // styled components

  // buttons for next/previous

    // variables to hold state
    // name height mass hair color skin color eye color birth year gender homeworld url
    // films species vehicles starships
    const [charName, setName] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [gender, setGender] = useState("");
    const [homeworld, setHomeworld] = useState("");
  
    const [films, setFilms] = useState("");
    const [starships, setStarships] = useState("");

    useEffect(
      () => {

      axios
        .get('https://swapi.co/api/people/')
        .then(
          response => {
            const people = response.data.results;
            console.log(people);
            // need loop to loop thru each page, 10 results per page results 0-9
            people.map((item, index) => {
              console.log(index);
              setName(item.name);
              setBirthYear(item.birth_year);
              setGender(item.gender);
              setHomeworld(item.homeworld);
              setFilms(item.films);
              setStarships(item.starships);

              });
          }
        )
        .catch(error => { console.log(error); });   

    }, []);
        
  const PreviousButton = () => {
    return ( 

    )

  }
  
  const NextButton = () => {
    return ( 

    )

  }
  const Person = () => { 
    return (
      <div>
        <p><BioData>Name:  </BioData><CustomData>{charName}</CustomData></p>
        <p><BioData>Birth Year:  </BioData><CustomData>{birthYear}</CustomData></p>
        <p><BioData>Gender:  </BioData><CustomData>{gender}</CustomData></p>
        <p>
          <SWLinks href={homeworld} target="_blank">Homeworld URL</SWLinks>
        </p>
        <p>
          <SWLinks href={films} target="_blank">Films URL</SWLinks>
        </p>
        <p>
          <SWLinks href={starships} target="_blank">Starships URL</SWLinks>
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PreviousButton />
      <NextButton />
      <Person />  
    </div>
  );

}

export default App;
