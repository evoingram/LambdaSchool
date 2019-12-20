import React, { useState, useEffect } from "react";
import CharacterCard from '../components/CharacterCard.js';

const SearchForm = props => {
 // searchTerm will save the data from the search input on every occurance of the change event.
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(props.characters);
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
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

export default SearchForm;