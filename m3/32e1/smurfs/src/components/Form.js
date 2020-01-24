import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import { Field, reduxForm } from 'redux-form';

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

let ContactForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name: </label>
				<Field name="name" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="age">Age: </label>
				<Field name="age" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="height">Height: </label>
				<Field name="height" component="input" type="text" />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

ContactForm = reduxForm({
	// a unique name for the form
	form: 'contact'
})(ContactForm);

export default ContactForm;
