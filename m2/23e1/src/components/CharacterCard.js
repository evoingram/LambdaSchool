import React from "react";
import styled from 'styled-components'

const Div = styled.div`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const CharacterCard = character => {
  console.log(character);
  return (
    <div className="save-wrapper">
    <div className="movie-card">
      <h2>{character.character.name}</h2>
      <div className="movie-director">Species: <em>{character.character.species}</em></div>
      <div className="movie-metascore">Alive: <strong>{character.character.status}</strong></div>
      </div>
    </div> 
  );
}
export default CharacterCard;