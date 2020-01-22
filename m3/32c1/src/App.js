import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
	const initialState = {
		additionalPrice: 0,
		car: {
			price: 26395,
			name: '2019 Ford Mustang',
			image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
			features: []
		},
		additionalFeatures: [
			{ id: 1, name: 'V-6 engine', price: 1500 },
			{ id: 2, name: 'Racing detail package', price: 1500 },
			{ id: 3, name: 'Premium sound system', price: 500 },
			{ id: 4, name: 'Rear spoiler', price: 250 }
		]
	};

	const removeFeature = item => {
		this.initialState.removeFeature(item.feature);
	};

	const buyItem = item => {
		this.initialState.buyItem(item.feature);
	};

	return (
		<div className="boxes">
			<div className="box">
				<Header car={initialState.car} />
				<AddedFeatures removeFeature={removeFeature} buyItem={buyItem} />
			</div>
			<div className="box">
				<AdditionalFeatures removeFeature={removeFeature} buyItem={buyItem} />
				<Total removeFeature={removeFeature} buyItem={buyItem} />
			</div>
		</div>
	);
};

export default App;
