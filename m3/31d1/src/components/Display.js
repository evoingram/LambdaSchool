import React from 'react';

/*
		• display the count of balls and strikes for the at-bat.
should be updated when the user records activity on the Dashboard component.
*/

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h2>Balls: </h2>
				<div>{this.props.balls}</div>

				<h2>Strikes: </h2>
				<div>{this.props.strikes}</div>
			</div>
		);
	}
}

export default Display;
