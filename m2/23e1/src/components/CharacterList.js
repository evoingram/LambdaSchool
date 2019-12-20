import React, { useEffect, useState } from "react";
import CharacterCard from '../components/CharacterCard.js';
import axios from 'axios';
import { Route } from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setChar] = useState();
  const  [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results);
          // setChar(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getChars();
  }, []);


  return (
    <section className="character-list">
      {
        characters.map(
          character => (
            <CharacterCard key={character.id} character={character} />
          )
        )
      }
    </section>
  );
};