import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedTMList from './SavedTMList'
import logo from './logo.svg';
import './App.css';

function App() {
  const [savedTMList, setSavedTMList] = useState( [] );

  const addToSavedList = movie => {
    setSavedTMList( [...savedTMList, movie] );
  };

  return (
    <div>
      <SavedTMList list={savedTMList} />
    </div>
  );
}

export default App;
