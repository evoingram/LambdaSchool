
import React from 'react';
import axios from 'axios';

function hideLogin() {
    // hide current page when login showing
    if (window.location.pathname === '/login') return null;
  }
  function hideSignup(){
    // hide current page when sign-up showing
    if (window.location.pathname === '/signup') return null;
}
    

function loadForm(){
axios
    .get("http://localhost:3000/data")
    .then(res => {
        console.log("form response = "); // Data was created successfully and logs to console
        console.log(res.data.data);
        console.log("form userinfo = " + res.data.userinfo);
        console.log("form tickets = " + res.data.tickets);
        console.log("form contacts = " + res.data.contacts);




    })
    .catch(err => {
        console.log(err); // logs error creating the data 
    });  
    
    
}
        
/*
var hideLogin = function (){
    // hide current page when login showing
    if (window.location.pathname === '/login') return null;
}

var hideSignup = function (){
    // hide current page when sign-up showing
    if (window.location.pathname === '/signup') return null;
}
var Hide = function (){
    return (
        <div>
            <App1 />
            <App2 />
        </div>
        );
}
*/
export { hideSignup };
export { loadForm };
export default hideLogin;