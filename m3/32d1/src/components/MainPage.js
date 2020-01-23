import React from 'react';
import '../App.css';
import Loader from './Loader';

import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import DisplayAPI from './DisplayAPI';

const MainPage = props => {
	return (
		<div className="App">
			<header className="App-header">
				<h2>Welcome to Erica's NASA APOD React-Redux App.</h2>
				{
					// 	If API info not loaded, load loader animation
					// If API info loaded, load display page
				}
				<button onClick={props.fetchActivity}>Get APOD From Random Date</button>
				{!props.activity && !props.isLoading && <Loader />}
				{props.isLoading && <Loader />}
				{props.activity && !props.isLoading && <DisplayAPI hdurl={props.activity.hdurl} />}
			</header>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		activity: state.activity,
		error: state.error
	};
};
export default connect(mapStateToProps, { fetchActivity })(MainPage);
