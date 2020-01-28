import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { fetchActivity } from '../actions';
// import { addFriend } from '../actions';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

let ContactForm = props => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [id, setID] = useState('');
	const [friend, setNewFriend] = useState({ name: '', age: '', email: '' });

	const handleSubmit = (event, values) => {
		event.preventDefault();
		axiosWithAuth()
			.post('http://localhost:5000/api/friends', {
				name: name,
				age: age,
				email: email
			})
			.then(res => {
				console.log(res.data); // Data was created successfully and logs to console
			})
			.catch(err => {
				console.log(err); // There was an error creating the data and logs to console
			});
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" onChange={event => setName(event.target.value)} />
			</div>
			<div>
				<label htmlFor="age">Age: </label>
				<input type="text" name="age" onChange={event => setAge(event.target.value)} />
			</div>
			<div>
				<label htmlFor="email">email: </label>
				<input type="text" name="email" onChange={event => setEmail(event.target.value)} />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ContactForm;
