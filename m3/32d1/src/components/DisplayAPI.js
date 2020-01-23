import React from 'react';

const DisplayAPI = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<img src={props.hdurl} width="40%" />
			<h3>{props.date}</h3>
			<h3>
				<a href={props.hdurl} target="_blank">
					HD URL
				</a>
			</h3>

			<div width="15%">
				<p>{props.explanation}</p>
			</div>
		</div>
	);
};

export default DisplayAPI;
