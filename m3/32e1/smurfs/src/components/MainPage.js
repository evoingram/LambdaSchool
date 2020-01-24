import React from 'react';
import './App.css';
import Loader from './Loader';
import ContactForm from './ContactForm';

import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import DisplayAPI from './DisplayAPI';

const container = {
	width: '100%',
	marginTop: '0%',
	paddingTop: '0%'
};
const MainPage = props => {
	const submit = (values, dispatch) => {
		// print the form values to the console

		console.log(values);
		return dispatch(props.submitFormValues(values));
	};
	return (
		<div className="App">
			<div style={container}>
				<h2>Smurf Village</h2>
				{!props.activity && !props.isLoading && <Loader />}
				{props.isLoading && <Loader />}
				<button onClick={props.fetchActivity}>Load Smurf Village</button>
				{props.activity && !props.isLoading && <ContactForm onSubmit={submit} />}
				{props.activity &&
					!props.isLoading &&
					props.activity.map(smurf => (
						<DisplayAPI key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
					))}
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
