import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { useInput } from './CustomHooks/InputHook'
import styled from 'styled-components'
// import UserData from './Data.js';

const Button = styled.button`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`
function Form(){
axios
    .get("http://localhost:3000/data")
    .then(res => {
        console.log("response = "); // Data was created successfully and logs to console
        console.log(res.data);
        console.log("userinfo = " + res.data.userinfo);
        console.log("tickets = " + res.data.tickets);
        console.log("contacts = " + res.data.contacts);
    })
    .catch(err => {
        console.log(err); // logs error creating the data 
    });  
    
    
        }
Form();
export default Form;