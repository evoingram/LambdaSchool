import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

/* 

	-- Student created functional components and used events in application to add dynamic functionality to app.
	-- Student's code was organized at the component level
	-- proper usage of state and props are demonstrated throughout the project
	// the UI is composed of small reusable components
	-- proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented. 
	-- Student used Array methods to dynamically render HTML elements.
	// Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. 
	-- Route management properly installed and used to show top level pages as well as nested views where necessary.
	-- Student has set up component management for the forms in the app that makes sense for each form. 
	// Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. 
	// Some form validation is in place.
	// Student's work demonstrates that all MVP features were built

Score 3:
	-- Student showed great insight in setting up the state management for the app's forms. 
	// Form validation is in place for all fields, and covers all use cases. 
	-- Loading states and success/error notifications are in place and add to the overall UX of the app.
  -- Not only are standard network request techniques employed, the code is organized in such a fashion that the student    
        demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.
	// Student was able to architect components to be easily reused. 
	-- Student used advanced React techniques like the composition pattern, custom hooks, render props, HOCs, etc.
	-- Student incorporated a third party event/animation library like unto Greensock, Anime, React-motion etc.
	// Student's work demonstrates that all MVP features were built.
	-- Student went above and beyond the project (search function?).
	// Pair programmed with the Web UI and Back end Architect
*/