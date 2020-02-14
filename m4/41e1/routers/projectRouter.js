const express = require('express');

const router = express.Router();

router.use(express.json());

const projects = require('../data/helpers/projectModel');

// crud here

// get list of projects

router.get('/', (req, res) => {
	projects
		.get()
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ errorMessage: 'The project information could not be retrieved.' });
		});
});

//get one project

// update one project

// delete one project

// create one project

module.exports = router;
