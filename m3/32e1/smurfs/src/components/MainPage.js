import React from 'react';
import Loader from './Loader';

import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import DisplayAPI from './DisplayAPI';

const MainPage = props => {
	// [selectedDate, setSelectedDate] = useState('');

	return (
		<div className="App">
			<BackgroundImage className="App-header">
				<div style={container}>
					<h2>NASA APOD Picture Generator</h2>
					{!props.activity && !props.isLoading && <Loader />}
					{props.isLoading && <Loader />}
					<h3>Launch status check complete.</h3>
					<h3>Click to proceed with launch.</h3>
					<Button onClick={props.fetchActivity}>Get APOD From Random Date</Button>

					{props.activity && !props.isLoading && (
						<DisplayAPI
							hdurl={props.activity.hdurl}
							title={props.activity.title}
							date={props.activity.date}
							explanation={props.activity.explanation}
						/>
					)}
				</div>
				{
					// 	If API info not loaded, load loader animation
					// If API info loaded, load display page
					/*
				
				<form onSubmit={props.fetchActivity}>
					Enter Date in YYYY-MM-DD Format: <input type="text" name="date" value={this.selectedDate} />
				</form>
				<button onClick={props.fetchActivity}>Get specific date</button>
				
				*/
				}
			</BackgroundImage>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		activity: state.activity,
		error: state.error,
		date: state.selectedDate
	};
};
export default connect(mapStateToProps, { fetchActivity })(MainPage);
