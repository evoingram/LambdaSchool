import React from 'react';

var container = {
	width: '70%',
	textAlign: 'center',
	margin: '15%'
};
const DisplayAPI = props => {
	return (
		<div>
			<div style={container}>
				<h2>Name: {props.name}</h2>
				<h3>Age: {props.age}</h3>
				<h3>Height: {props.height}</h3>
			</div>
		</div>
	);
};

export default DisplayAPI;
