const express = require('express');

const router = express.Router();

router.use(express.json());

const actions = require('../data/helpers/actionModel');

// crud here

// get list of actions

router.get('/', (req, res) => {
	actions
		.get()
		.then(actions => {
			res.status(200).json(actions);
		})
		.catch(error => {
			res.status(500).json({ errorMessage: 'Error retrieving actions.', error });
		});
});
//get one actions

router.get('/actions/:id', (req, res) => {
	const actionID = req.params.id;
	actions
		.get(actionID)
		.then(action => {
			if (action) {
				res.status(200).json(action);
			} else {
				res.status(404).json({ errorMessage: 'No action found with that I.D.' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ errorMessage: 'No action could be retrieved.' });
		});
});

// update one action
// action:  project_id, description, notes, completed
router.put('/actions/:id', (req, res) => {
	const actionID = req.params.id;
	const projectID = req.params.project_id;
	const actionNotes = req.params.notes;
	const actionDescription = req.params.description;
	const actionCompleted = req.params.completed;
	actions
		.update(actionID, { projectID, actionNotes, actionDescription, actionCompleted })
		.then(action => {
			if (action) {
				res.status(200).json(action);
			} else {
				res.status(404).json({ errorMessage: 'No action found with that I.D.' });
			}
		})
		.catch(error => {
			res.status(500).json({ errorMessage: 'action not updated.', error });
		});
});

// delete one action
router.delete('/actions/:id', (req, res) => {
	const actionID = req.params.id;
	actions
		.remove(actionID)
		.then(() => {
			if (action) {
				res.status(200).json({ message: `action ${actionID} was deleted` });
			} else {
				res.status(404).json({ errorMessage: 'No action found with that I.D.' });
			}
		})
		.catch(error => {
			res.status(500).json({ errorMessage: `action ${actionID} not deleted.`, error });
		});
});

// create one action
// action:  project_id, description, notes, completed
router.post('/actions', (req, res) => {
	const projectID = req.params.project_id;
	const actionNotes = req.params.notes;
	const actionDescription = req.params.description;
	const actionCompleted = req.params.completed;
	actions
		.insert({
			project_id: projectID,
			notes: actionNotes,
			description: actionDescription,
			complete: actionCompleted
		})
		.then(action => {
			if (action) {
				res.status(200).json({ message: action });
			} else {
				res.status(404).json({ errorMessage: 'No action was created.' });
			}
		})
		.catch(error => {
			res.status(500).json({ errorMessage: 'Error adding action.', error });
		});
});
module.exports = router;
