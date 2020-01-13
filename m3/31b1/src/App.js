import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm.js';
import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
      
  }
  // - function for get request
  // - function for set data to state 
  // - function for handleChange for the search
  // - maybe function for contrib graph

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <SearchForm />
        <UserCard />
      </div>
    );
  }
}

export default App;
