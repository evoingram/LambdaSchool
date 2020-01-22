import React from 'react';

const AdditionalFeature = props => {
	const buyItem = () => {
		console.log('additionalfeature buyitem fired off');
		props.buyItem(props.feature);
	};

	return (
		<li>
			<button className="button" onClick={buyItem}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
