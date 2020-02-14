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
router.get('/:id', (req, res) => {
	const projectID = req.params.id;
	projects
		.get(projectID)
		.then(project => {
			if (project) {
				res.status(200).json(project);
			} else {
				res.status(404).json({ errorMessage: 'No project found with that I.D.' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ errorMessage: 'No project could be retrieved.' });
		});
});

// update one project

router.put('/:id', (req, res) => {
	const projectID = req.params.id;
	const projectName = req.params.name;
	const projectDescription = req.params.description;
	posts
		.update(projectID, { projectName, projectDescription })
		.then(project => {
			if (project) {
				res.status(200).json(project);
			} else {
				res.status(404).json({ errorMessage: 'No project found with that I.D.' });
			}
		})
		.catch(error => {
			res.status(500).json({ errorMessage: 'Project not updated.', error });
		});
});

// delete one project

router.delete('/:id', (req, res) => {
	const projectID = req.params.id;
	posts
		.remove(projectID)
		.then(() => {
			res.status(200).json({ message: `Post ${projectID} was deleted` });
		})
		.catch(error => {
			res.status(500).json({ errorMessage: `Post ${projectID} not deleted.`, error });
		});
});
// create one project

router.post('/:id/posts', (req, res) => {
	const projectID = req.params.id;
	const bodyText = req.body.text;
	posts
		.insert({ user_id: projectID, text: bodyText })
		.then(post => {
			res.status(200).json({ message: post });
		})
		.catch(error => {
			res.status(500).json({ errorMessage: 'Error adding post.', error });
		});
});

module.exports = router;
