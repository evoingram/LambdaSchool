const db = require('../data/db-config');

module.exports = {
	getTasks,
	getProjects,
	getResources,
	addTask,
	addProject,
	addResource,
	update,
	remove
};

// retrieving a list of resources
function getResources() {
	return db('resources');
}

// retrieving a list of projects
function getProjects() {
	return db('projects');
}

// retrieving a list of tasks
// The list of tasks should include the project name and project description.
/*
SELECT projects.projectname, projects.projectdescription,tasks.taskdescription,tasks.tasknotes,tasks.taskscompleted
FROM projects 
JOIN tasks ON tasks.projectid=projects.projectid
WHERE projects.projectid=1
ORDER BY projects.projectname;
*/
function getTasks(projectid) {
	return db('projects')
		.select(
			'projects.projectname',
			'projects.projectdescription',
			'tasks.taskdescription',
			'tasks.tasknotes',
			'tasks.taskscompleted'
		)
		.join('tasks', 'projects.projectid', 'tasks.projectid')
		.where({ 'projects.projectid': projectid })
		.orderBy('projects.projectname');
}

// adding resources.
/*
SELECT resources.resourcename
FROM resources 
JOIN projectsresources ON projectsresources.resourcesid=resources.resourcesid
JOIN projects ON projectsresources.projectid=projects.projectid
WHERE projects.projectid=1;
*/
function addResource(project) {
	db('resources')
		.insert(project)
		.then(ids => {
			return findById(ids[0]);
		});
}

// adding projects
/*
SELECT instructions.instruction, instructions.stepnumber
FROM instructions 
JOIN projectsinstructions ON projectsinstructions.instructionsid=instructions.instructionsid
JOIN projects ON projectsinstructions.projectid=projects.projectid
WHERE projects.projectid=1
Order BY instructions.stepnumber

*/
function addProject(project) {
	db('projects')
		.insert(project)
		.then(ids => {
			return findById(ids[0]);
		});
}
// adding tasks
/*
SELECT instructions.instruction, instructions.stepnumber
FROM instructions 
JOIN projectsinstructions ON projectsinstructions.instructionsid=instructions.instructionsid
JOIN projects ON projectsinstructions.projectid=projects.projectid
WHERE projects.projectid=1
Order BY instructions.stepnumber

*/
function addTask(project) {
	db('tasks')
		.insert(project)
		.then(ids => {
			return findById(ids[0]);
		});
}

/*
function add(project) {
	db('projects')
		.insert(project)
		.then(ids => {
			return findById(ids[0]);
		});
}
function update(newproject, id) {
	db('projects')
		.where({ id })
		.update(newproject)
		.then(ids => {
			return ids;
		});
}

function remove(id) {
	let project = findById(id);
	db('projects')
		.delete()
		.where({ id: id })
		.then(ids => {
			return project;
		});
}

function update(id, changes) {
	return db('users')
		.where({ id })
		.update(changes);
}
*/
