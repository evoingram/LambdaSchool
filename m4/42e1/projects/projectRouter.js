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

router.get('/:projectid/tasks', (req, res) => {
	const id = req.params.projectid;

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

router.get('/:projectid', (req, res) => {
	const id = req.params.projectid;

	Projects.getFullProject(id)
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
router.post('/:projectid/tasks', (req, res) => {
	const projectid = req.params.projectid;
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

//update project

router.put('/:projectid', (req, res) => {
	const projectid = req.params.projectid;
	const projectName = req.body.projectname;
	const projectDescription = req.body.projectdescription;
	const updatedProject = { projectid: projectid, projectname: projectName, projectdescription: projectDescription };

	Projects.updateProject(updatedProject, projectid)
		.then(project => {
			if (project) {
				res.json(project);
			} else {
				res.status(404).json({ message: 'Could not find project with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update project' });
		});
});

//update task

router.delete('/:projectid', (req, res) => {
	const id = req.params.projectid;

	Projects.removeProject(id)
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

router.delete('/:projectid/tasks/:taskid', (req, res) => {
	const taskid = req.params.taskid;
	const projectid = req.params.projectid;

	Projects.removeTask(projectid, taskid)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: 'Could not find task with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to delete task' });
		});
});

module.exports = router;
