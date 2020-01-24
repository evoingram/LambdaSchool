import React from 'react';
import './App.css';
import Loader from './Loader';

import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import DisplayAPI from './DisplayAPI';

const container = {
	width: '100%',
	marginTop: '0%',
	paddingTop: '0%'
};
const MainPage = props => {
	return (
		<div className="App">
			<div style={container}>
				<h2>Smurf Village</h2>
				{!props.activity && !props.isLoading && <Loader />}
				{props.isLoading && <Loader />}
				<button onClick={props.fetchActivity}>Load Smurf Village</button>
				{props.activity && !props.isLoading && (
					<DisplayAPI
						name={props.activity[0].name}
						age={props.activity[0].age}
						height={props.activity[0].height}
					/>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		activity: state.activity,
		error: state.error,
		name: state.name,
		age: state.age,
		height: state.height
	};
};
export default connect(mapStateToProps, { fetchActivity })(MainPage);
