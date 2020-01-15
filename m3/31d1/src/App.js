import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			balls: 0,
			strikes: 0
		};
	}

	maxBallsStrikes = () => {
		// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
		if (this.state.balls === 4 || this.state.strikes === 3) {
			this.setState({ balls: 0 });
			this.setState({ strikes: 0 });
		}
	};

	recordBall = () => {
		if (this.state.balls < 4) {
			this.setState({ balls: this.state.balls + 1 });
		} else {
			this.maxBallsStrikes();
		}
	};
	recordStrike = () => {
		if (this.state.strikes < 3) {
			this.setState({ strikes: this.state.strikes + 1 });
		} else {
			this.maxBallsStrikes();
		}
	};
	recordFoul = () => {
		// With no strikes, a foul makes it 1 strike.
		// With 1 strike, a foul makes it 2 strikes.
		// With two strikes a foul has no effect, count stays at 2 strikes.
		if (this.state.strikes === 0 || this.state.strikes === 1) {
			this.setState({ strikes: this.state.strikes + 1 });
		}
		this.maxBallsStrikes();
	};

	recordHit = () => {
		// hit = reset balls and strikes to 0
		this.setState({ balls: 0 });
		this.setState({ strikes: 0 });
	};

	render() {
		return (
			<div>
				<Display balls={this.state.balls} strikes={this.state.strikes} />
				<Dashboard
					balls={this.state.balls}
					strikes={this.state.strikes}
					recordStrike={this.recordStrike}
					recordBall={this.recordBall}
					recordFoul={this.recordFoul}
					recordHit={this.recordHit}
				/>
			</div>
		);
	}
}
export default App;
