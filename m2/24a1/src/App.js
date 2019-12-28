import React, { useState } from 'react';
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
// import Form from './components/old pages/Form.js/index.js';
import Signup from './components/Signup.js';

	// TODO: 2 Route management properly installed and used to show top level pages as well as nested views where necessary.
  // TODO: 
  // TODO: 
  // TODO: 
  // TODO: 
  
export default function App() {
  return (
    <main>
      <Header />
      <Login />
      <Route path="/signup" component={Signup}/>
    </main>
  );
}
/*<Route path="/" component={Form} />*/
