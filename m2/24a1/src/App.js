import React, { useState } from 'react';
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import Form from './components/Form.js';
import Signup from './components/Signup.js';

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
