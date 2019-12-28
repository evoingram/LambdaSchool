import React from "react";

  	// TODO: 3 Not only are standard network request techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.
  
	// TODO: 3 Student showed great insight in setting up the state management for the app's forms. 
	// TODO: 2 proper usage of state and props are demonstrated throughout the project
  	// TODO: 2 proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented. 
  
	// TODO: 3 Student incorporated a third party event/animation library like unto Greensock, Anime, React-motion etc.
  	// TODO: 2 Student used Array methods to dynamically render HTML elements.
	// TODO: 3 Loading states and success/error notifications are in place and add to the overall UX of the app.
  	// TODO: 3 Student used advanced React techniques like the composition pattern, custom hooks, render props, HOCs, etc.
  
  	// TODO: 3 Student was able to architect components to be easily reused. 
	// TODO: 2 Student created functional components and used events in application to add dynamic functionality to app.
	// TODO: 2 the UI is composed of small reusable components
	// TODO: 2 Student's code was organized at the component level
	// TODO: 2 Student has set up component management for the forms in the app that makes sense for each form. 
	
    // hide current page when login showing
    if (window.location.pathname === '/login') return null;
    // hide current page when sign-up showing
    if (window.location.pathname === '/signup') return null;
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Lambda School's DevDesk Queue</h1>
    </header>
  );
}