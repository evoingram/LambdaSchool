import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

class BubblePage extends React.Component {
	state = {
		colorList: []
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axiosWithAuth()
			.get('http://localhost:5000/api/colors')
			.then(res => {
				console.log(res.data);
				this.setState({
					colorList: res.data
				});
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<>
				{this.props.fetchingData && (
					<div className="key spinner">
						<p>Loading Data</p>
					</div>
				)}
				{console.log('FriendsList.js Friends Response = ' + this.state.FriendsList)}
				<ContactForm />
				<ColorList colors={colorList} updateColors={setColorList} />
				<Bubbles colors={colorList} />
			</>
		);
	}
}
export default BubblePage;
