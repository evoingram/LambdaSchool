import React from 'react';

const DisplayAPI = props => {
	return (
		<div>
			{props.hdurl}
			<img src={props.hdurl} width="40%" />
		</div>
	);
};

export default DisplayAPI;
