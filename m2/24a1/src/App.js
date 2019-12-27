import React, { useState } from 'react';
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import Form from './components/Form.js';

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route path="/" component={Form} />
    </main>
  );
}
