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

  const [numbersState, setNumbersState] = useState(numbers);
  const [operatorsState, setOperatorsState] = useState(operators);
  const [specialState, setSpecialState] = useState(specials);
  let displayAmount = 0;

  const DisplayWindow = () => {
    return (
      <div id="display" className="display">
        {displayAmount}
      </div>
    );
  };

  const ButtonsSpecials = () => {
    return (
      <div id="specialsRow" className="buttonRow1">
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

  const NumbersSpecials = () => {
    return (
      <div id="numbersRow" className="buttonRow2">
        {numbers.map((item, index) => {
          return (
            <div className="buttonNu" key="{index}">
              {item}
            </div>
          );
        })}
      </div>
    );
  };

  const OperatorsSpecials = () => {
    return (
      <div id="operatorsRow" className="buttonColumn2">
        {operators.map((item, index) => {
          return (
            <div className="buttonOp" key="{index}">
              {item.char}
            </div>
          );
        })}
      </div>
    );
  };
  
  // onClick={() => incrementA(scoreA + fieldGoal)}
  // if button.textcontent = C Then do this
  // if button.textcontent = +/- Then do this
  // if button.textcontent = % Then do this
  // if button.textcontent = 0-9 Then do this
  // if button.textcontent = +-/x= Then do this


  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <DisplayWindow />
        <div className="buttonDisplay">
          <div className="buttonColumn1">
            <ButtonsSpecials />
            <NumbersSpecials />
          </div>
          <OperatorsSpecials />
          {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        </div>
      </div>
    </div>
  );
}

export default App;
