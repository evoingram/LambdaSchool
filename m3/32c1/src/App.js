import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
	const removeFeature = item => {
		this.state.removeFeature(item.feature);
	};

	const buyItem = item => {
		this.state.buyItem(item.feature);
	};

	return (
		<div className="boxes">
			<div className="box">
				<Header />
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
