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
			res.status(500).json({ message: 'Failed to get tasks' });
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

// add project
router.post('/', (req, res) => {
	const projectData = req.body;

	Projects.addProject(projectData)
		.then(project => {
			res.status(201).json(project);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new project' });
		});
});
// add task
router.post('/:id/tasks', (req, res) => {
	const projectid = req.params.id;
	const taskDescription = req.body.taskdescription;
	const taskNotes = req.body.tasknotes;
	const taskCompleted = req.body.taskcompleted;
	const taskData = {
		projectid: projectid,
		taskdescription: taskDescription,
		tasknotes: taskNotes,
		taskcompleted: taskCompleted
	};
	Projects.addTask(taskData)
		.then(tasks => {
			if (tasks) {
				res.status(201).json(tasks);
			} else {
				res.status(404).json({ message: 'Could not find project with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new task' });
		});
});

// add resource

router.post('/resources', (req, res) => {
	const resourceData = req.body;

	Projects.addResource(resourceData)
		.then(resource => {
			res.status(201).json(resource);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new resource' });
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
