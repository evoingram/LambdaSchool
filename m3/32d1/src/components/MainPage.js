import React from 'react';
import '../App.css';
import Loader from './Loader';
import styled from 'styled-components';
import milkyWay from './../img/milkyWay.jpg';

import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import DisplayAPI from './DisplayAPI';

const BackgroundImage = styled.div`
	background-image: url(${milkyWay});
`;

const MainPage = props => {
	return (
		<div className="App">
			<BackgroundImage className="App-header">
				<div width="40%">
					<h2>NASA APOD Picture Generator</h2>
					<h6>Generates APOD images from random dates.</h6>
				</div>
				{
					// 	If API info not loaded, load loader animation
					// If API info loaded, load display page
				}
				<button onClick={props.fetchActivity}>Get APOD From Random Date</button>
				{!props.activity && !props.isLoading && <Loader />}
				{props.isLoading && <Loader />}
				{props.activity && !props.isLoading && (
					<DisplayAPI
						hdurl={props.activity.hdurl}
						title={props.activity.title}
						date={props.activity.date}
						explanation={props.activity.explanation}
					/>
				)}
			</BackgroundImage>
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
