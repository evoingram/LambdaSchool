import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedTMList from './SavedTMList'
import Form from './form'
import logo from './logo.svg';
import './App.css';

function App() {
  const [savedTMList, setSavedTMList] = useState( [] );

  const addToSavedList = user => {
    setSavedTMList( [...savedTMList, user] );
  };

  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const addUser = user => {
    setUser( [...Form, user] );
  };

    
  const handleChange = event => {
      setUser(event.target.value);
  };

  const handleSubmit = event => {
      event.preventDefault();
      console.log(event.target.name);
      console.log(event.target.email);
      console.log(event.target.role);
  };
    
    
  return (
    <div>
      <Form component={Form} />
      <SavedTMList list={savedTMList} />
    </div>
  );
}

export default App;
