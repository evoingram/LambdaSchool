const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
	Projects.getProjects()
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.get('/:id/tasks', (req, res) => {
	const id = req.params.id;

	Projects.getTasks(id)
		.then(project => {
			if (project) {
				res.json(project);
			} else {
				res.status(404).json({ message: 'Could not find project with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.get('/resources', (req, res) => {
	Projects.getResources()
		.then(resources => {
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});
router.get('/ingredients/:id/projects', (req, res) => {
	const { id } = req.params;
	Projects.getIngredientProjects(id)
		.then(projectlist => {
			if (projectlist.length) {
				res.json(projectlist);
			} else {
				res.status(404).json({ message: 'Could not find projects for given ingredient' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.post('/', (req, res) => {
	const projectData = req.body;

	Projects.add(projectData)
		.then(project => {
			res.status(201).json(project);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new project' });
		});
});

router.post('/:id/steps', (req, res) => {
	const stepData = req.body;
	const { id } = req.params;

	Projects.findById(id)
		.then(project => {
			if (project) {
				Projects.addStep(stepData, id).then(step => {
					res.status(201).json(step);
				});
			} else {
				res.status(404).json({ message: 'Could not find project with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new step' });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Projects.findById(id)
		.then(project => {
			if (project) {
				Projects.update(changes, id).then(updatedRecipe => {
					res.json(updatedRecipe);
				});
			} else {
				res.status(404).json({ message: 'Could not find scheme with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update scheme' });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Projects.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: 'Could not find scheme with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to delete scheme' });
		});
});

module.exports = router;
