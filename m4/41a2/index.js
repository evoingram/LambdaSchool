const express = require('express');
const Hubs = require('./data/db.js');
const server = express();

server.use(express.json());

/*
	When the client makes a GET request to /api/users:
		• If there's an error in retrieving the users from the database:
			○ respond with HTTP status code 500.
			○ return the following JSON object: { errorMessage: "The users information could not be retrieved." }.
*/
// get
server.get('/api/users', (req, res) => {
	Hubs.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ errorMessage: 'The users information could not be retrieved.' });
		});
});
/*
	When the client makes a GET request to /api/users/:id:
		• If the user with the specified id is not found:
			○ respond with HTTP status code 404 (Not Found).
			○ return the following JSON object: { message: "The user with the specified ID does not exist." }.
		• If there's an error in retrieving the user from the database:
			○ respond with HTTP status code 500.
			○ return the following JSON object: { errorMessage: "The user information could not be retrieved." }.
*/

// get
server.get('/api/hubs/:id', (req, res) => {
	Hubs.findById(req.params.id)
		.then(hubs => {
			console.log(hubs);
			res.status(200).json(hubs);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json({ errorMessage: 'The user with the specified ID does not exist.' });
			res.status(500).json({ errorMessage: 'The user information could not be retrieved.' });
		});
});
// post
/*
	When the client makes a POST request to /api/users:
		• If the request body is missing the name or bio property:
			○ respond with HTTP status code 400 (Bad Request).
			○ return the following JSON response: { errorMessage: "Please provide name and bio for the user." }.
		• If the information about the user is valid:
			○ save the new user the the database.
			○ respond with HTTP status code 201 (Created).
			○ return the newly created user document.
		• If there's an error while saving the user:
			○ respond with HTTP status code 500 (Server Error).
			○ return the following JSON object: { errorMessage: "There was an error while saving the user to the database" }.
*/
server.post('/api/users', (req, res) => {
	//axios post
	const hubInfo = req.body;
	Hubs.add(hubInfo)
		.then(hub => {
			res.status(201).json(hub);
		})
		.catch(err => {
			console.log(err);
			res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
			res.status(500).json({ errorMessage: 'There was an error while saving the user to the database.' });
		});
});
// delete
/*
	When the client makes a DELETE request to /api/users/:id:
		• If the user with the specified id is not found:
			○ respond with HTTP status code 404 (Not Found).
			○ return the following JSON object: { message: "The user with the specified ID does not exist." }.
		• If there's an error in removing the user from the database:
			○ respond with HTTP status code 500.
			○ return the following JSON object: { errorMessage: "The user could not be removed" }.
*/
server.delete(`/api/hubs/:id`, (req, res) => {
	Hubs.remove(req.params.id)
		.then(removed => {
			res.status(200).json(removed);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ errorMessage: 'oops' });
		});
});
/*
	When the client makes a PUT request to /api/users/:id:
		• If the user with the specified id is not found:
			○ respond with HTTP status code 404 (Not Found).
			○ return the following JSON object: { message: "The user with the specified ID does not exist." }.
		• If the request body is missing the name or bio property:
			○ respond with HTTP status code 400 (Bad Request).
			○ return the following JSON response: { errorMessage: "Please provide name and bio for the user." }.
		• If there's an error when updating the user:
			○ respond with HTTP status code 500.
			○ return the following JSON object: { errorMessage: "The user information could not be modified." }.
		• If the user is found and the new information is valid:
			○ update the user document in the database using the new information sent in the request body.
			○ respond with HTTP status code 200 (OK).
			○ return the newly updated user document.


*/
const port = 5000;
server.listen(port, () => console.log(`\n** API on port 5000 ${port} \n`));
