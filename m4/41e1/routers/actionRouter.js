const express = require('express');

const router = express.Router();

router.use(express.json());

const actions = require('../data/helpers/actionModel');

// crud here

// get list of actions

router.get('/:id/actions/', (req, res) => {
	actions
		.get()
		.then(actions => {
			res.status(200).json(actions);
		})
		.catch(error => {
			res.status(500).json({ errorMessage: 'Error retrieving users.', error });
		});
});
//get one actions

// update one actions

// delete one actions

// create one actions

module.exports = router;
