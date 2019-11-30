import React from "react";
import { useState } from "react";
import "./App.css";
import { numbers, operators, specials } from "./data";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operators = [
    {
      char: "/",
      value: "/"
    },
    {
      char: "x",
      value: "*"
    },
    {
      char: "-",
      value: "-"
    },
    {
      char: "+",
      value: "+"
    },
    {
      char: "=",
      value: "="
    }
  ];

  const specials = ["C", "+/-", "%"];
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.

  const [numberState, setNumberState] = useState(numbers);
  const [operatorState, setOperatorState] = useState(operators);
  const [specialState, setSpecialState] = useState(specials);
  const arrNewSpecials = specials.map((item, index) => {
    return `<div className="buttonSp">${item[index]}</div>`;
  });

  const DisplayWindow = () => {
    return (
      <div id="display" className="display">
        0
      </div>
    );
  };

  const ButtonsSpecials = () => {
    return (
      <div id="specialsRow">
        {specials.map((item, index) => {
          return (
            <div className="buttonSp" key="{index}">
              {item}
            </div>
          );
        })}
      </div>
    );
  };
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <DisplayWindow />
        <ButtonsSpecials />
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
