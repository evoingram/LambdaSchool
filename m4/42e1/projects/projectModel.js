const db = require('../data/db-config');

module.exports = {
	getTasks,
	getProjects,
	getResources,
	getProject,
	addTask,
	addProject,
	addResource
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
			'tasks.taskcompleted'
		)
		.join('tasks', 'projects.projectid', 'tasks.projectid')
		.where({ 'projects.projectid': projectid });
}

// adding resource
function addResource(resource) {
	db('resources')
		.insert(resource)
		.then(ids => {
			return getResources();
		});
}
// retrieve project
function getProject(projectid) {
	return db('projects').where({ 'projects.projectid': projectid });
}

// adding project
function addProject(project) {
	db('projects')
		.insert(project)
		.then(ids => {
			return getProject(ids[0]);
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
function addTask(taskData) {
	db('tasks')
		.insert(taskData)
		.then(ids => {
			return getTasks(taskData.projectid);
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
