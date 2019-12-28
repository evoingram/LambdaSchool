import React, { useState } from 'react';
import Header from "./components/Header.js";
import { Route, Router } from 'react-router-dom';
import Login from './components/Login.js';
// import Form from './components/old pages/Form.js/index.js';
import Signup from './components/Signup.js';
import hideLogin from './components/Hide.js';
import hideSignup from './components/Hide.js';
import Profile from './components/Profile.js';
import TicketListH from './components/TicketListH.js';
import TicketListS from './components/TicketListS.js';
import TicketListQ from './components/TicketListQ.js';

	// TODO: 2 Route management properly installed and used to show top level pages as well as nested views where necessary.
  
export default function App() {
  // click signup, hide login 
  // click login, hide login & signup, load profile + ticketlistH/S

  return (
    <main>
      <div>
        <Header />
        <Login />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile}/>
        <Route path="/TicketListH" component={TicketListH}/>
        <Route path="/TicketListS" component={TicketListS} />  
      </div>
    </main>
  );
}
/*<Route path="/" component={Form} />*/
