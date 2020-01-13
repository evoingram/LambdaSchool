import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm.js';
import UserCard from './components/UserCard.js';
import axios from 'axios';
import GitHubCalendar from 'github-calendar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubProfile: '',
      username: 'evoingram'
    };
      
  }

  getRequestGH = (username) => { 
  // - function for get request & setState
    let url = `https://api.github.com/users/${username}`;                    
    axios({
      method: "get",
      url: url,
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
      }
    })
    .then(githubProfile => {
      console.log("GitHub response = " + githubProfile);
      this.setState({ githubProfile: githubProfile });
    })
    .catch(err => {
        console.log(err); 
    });  
  }

  getRequestGHF = (username) => { 
  // - function for get request & setState
    let url = `https://api.github.com/users/${username}/followers`;                    
    axios({
      method: "get",
      url: url,
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
      }
    })
    .then(githubProfile => {
      console.log("GitHub response = " + githubProfile);
      this.setState({ githubProfile: githubProfile });
    })
    .catch(err => {
        console.log(err); 
    });  
  }

  async githubContributions(username) {     
  // - maybe function for contrib graph
      let responseSummaryText = "Summary of pull requests, issues opened, and commits made by " + `${username}`;
      /*let responseProxy = "urlreq";*/
      let responseGlobalStats="true";
      let responseResponsive="true";
      let calendarOptions = new Object();
      calendarOptions.summary_text = await GitHubCalendar(".calendar", `${username}`);
      calendarOptions.global_stats = await GitHubCalendar(".calendar", `${username}`);
      calendarOptions.responsive = await GitHubCalendar(".calendar", `${username}`);
      console.log("GitHub calendar options:" + `${calendarOptions}`);
      await GitHubCalendar(".calendar", `${username}`);
  }


  todoSearch = event => {
    // search function
    const results = this.state.data.filter(todoItem =>
      todoItem.task.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
    );
    this.setState({
      searchResults: [...results]
    });
  }

  changeSearchTerm = event => {
  // - function for handleChange for the search
    event.preventDefault();
    if (event.target.value !== null && event.target.value !== undefined) { 
      this.setState({
        searchTerm: event.target.value
      });
    }
    else {
      this.setState({
        searchTerm: ''
      });
    }
    this.todoSearch();
  };
  


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
        <SearchForm getRequestGH={this.getRequestGH} githubContributions={this.githubContributions} todoSearch={this.todoSearch} changeSearchTerm={this.changeSearchTerm}/>
        <UserCard getRequestGH={this.getRequestGH} githubContributions={this.githubContributions}/>
      </div>
    );
  }
}

export default App;
