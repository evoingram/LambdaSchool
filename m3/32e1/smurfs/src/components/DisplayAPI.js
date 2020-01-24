import React from 'react';
// import styled from 'styled-components';

var container = {
	width: '70%',
	textAlign: 'center',
	margin: '15%'
};
const DisplayAPI = props => {
	return (
		<div>
			<div style={container}>
				<h2>{props.name}</h2>
				<h3>{props.age}</h3>
				<h3>Height: {props.height}</h3>
			</div>
		</div>
	);
};

export default DisplayAPI;
