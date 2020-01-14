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
      githubProfile: {},
      githubFollowers: [{}],
      username: 'evoingram'
    };
      
  }

  componentDidMount() {
      // - function for get request & setState
    let url = `https://api.github.com/users/${this.state.username}`;
      axios({
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
        }
      })
        .then(githubProfileResponse => {
          console.log([githubProfileResponse]);
          this.setState({ githubProfile: githubProfileResponse.data });
        console.log(this.state.githubProfile);
        console.log(`githubProfile img url = ${this.state.githubProfile.avatar_url}`);
        })
        .catch(err => {
          console.log(err);
        });
      
        url = `https://api.github.com/users/${this.state.username}/followers`;                    
        axios({
          method: "get",
          url: url,
          headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
              "Content-Type": "application/json"
          }
        })
        .then(githubFollowerResponse => {
          console.log("GitHub follower response = " + githubFollowerResponse);
          this.setState({ githubFollowers: githubFollowerResponse });
          console.log("GitHub follower state = " + `${this.state.githubFollowers}`);
        })
        .catch(err => {
            console.log(err); 
        });  
    /*
        let responseSummaryText = "Summary of pull requests, issues opened, and commits made by " + `${username}`;
          // let responseProxy = "urlreq";
          let responseGlobalStats="true";
          let responseResponsive="true";
          let calendarOptions = new Object();
          calendarOptions.summary_text = await GitHubCalendar(".calendar", `${username}`);
          calendarOptions.global_stats = await GitHubCalendar(".calendar", `${username}`);
          calendarOptions.responsive = await GitHubCalendar(".calendar", `${username}`);
          console.log("GitHub calendar options:" + `${calendarOptions}`);
          await GitHubCalendar(".calendar", `${username}`);
    */
  }

    /*
async githubContributions(username) { 
  
    event.preventDefault();
  // - maybe function for contrib graph
      let responseSummaryText = "Summary of pull requests, issues opened, and commits made by " + `${username}`;
      // let responseProxy = "urlreq";
      let responseGlobalStats="true";
      let responseResponsive="true";
      let calendarOptions = new Object();
      calendarOptions.summary_text = await GitHubCalendar(".calendar", `${username}`);
      calendarOptions.global_stats = await GitHubCalendar(".calendar", `${username}`);
      calendarOptions.responsive = await GitHubCalendar(".calendar", `${username}`);
      console.log("GitHub calendar options:" + `${calendarOptions}`);
      await GitHubCalendar(".calendar", `${username}`);
  }

    */

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
        <UserCard getRequestGH={this.getRequestGH} githubContributions={this.githubContributions} githubProfile={this.state.githubProfile} githubFollowers={this.state.githubFollowers}/>
      </div>
    );
  }
}

export default App;
