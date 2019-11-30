//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ButtonsRow from "./ButtonsRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const teamH = "Lions";
  const teamA = "Tigers";
  const [scoreH, incrementH] = useState(0);
  const [scoreA, incrementA] = useState(0);
  const TopRow = () => {
    return (
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">{teamH}</h2>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{scoreH}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
          <h2 className="away__name">{teamA}</h2>
          <div className="away__score">{scoreA}</div>
        </div>
      </div>
    );
  };
  const ButtonsRow = () => {
    return (
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => incrementH(scoreH + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => incrementH(scoreH + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => incrementA(scoreA + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => incrementA(scoreA + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    );
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow />
        <BottomRow />
      </section>
      <ButtonsRow />
    </div>
  );
}

export default App;

/* TODO STEP 5 - Break out parts of this component into smaller components and compose multiple components together to make the UI */
// done

/* TODO STEP 6 - Write a "handler" function in the component that takes in a team name and an amount. This function will then be passed to each button's click handler. It will increment the correct team's score by the passed in amount */

/* TODO STEP 7 - Play around with the styling and make this project your own! Maybe make it a soccer (non-american football) scoreboard, or a rugby or baseball scoreboard */

/* TODO STEP 8 - Add a button that changes which quarter the game is in, and then render the state quarter value on the scoreboard */

/* TODO STEP 9 - Make the entire board fully functional with buttons and state! (If you want to make a timer, you'll have to look into useEffect) */

/* TODO STEP 10 - */
