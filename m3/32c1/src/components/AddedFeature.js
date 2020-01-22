import React from 'react';

const AddedFeature = props => {
	const removeFeature = () => {
		console.log('additionalfeature removeitem fired off');
		props.removeFeature(props.feature);
	};

	return (
		<li>
			<button className="button" onClick={removeFeature}>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
