
import React from 'react';
function hideLogin() {
    // hide current page when login showing
    if (window.location.pathname === '/login') return null;
  }
  function hideSignup(){
    // hide current page when sign-up showing
    if (window.location.pathname === '/signup') return null;
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
export default hideLogin;