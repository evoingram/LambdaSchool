const db = require('../database/connection.js');

module.exports = {
	getStudents,
	getCohortStudents,
	getStudent,
	addStudent,
	updateStudent,
	removeStudent
};

// retrieving a list of students
function getStudents() {
	return db('students');
}

// retrieving a list of students from a cohort
function getCohortStudents(cohortsid) {
	return db('students').where({ 'students.cohortsid': cohortsid });
}

// retrieve student
function getStudent(studentsid) {
	return db('students').where({ 'students.studentsid': studentsid });
}

// adding student
async function addStudent(student) {
	const [id] = await db('students')
		.insert(student, 'id')
		.then(ids => {
			return getStudents();
		});
}

// update student
function updateStudent(newStudent, studentsid) {
	db('students')
		.where({ studentsid: studentsid })
		.update(newStudent)
		.then(ids => {
			return ids;
		});
}

// delete student
function removeStudent(studentsid) {
	let student = getStudent(studentsid);
	db('students')
		.delete()
		.where({ studentsid: studentsid })
		.then(ids => {
			return student;
		});
}

/*
   knex('users')
    .innerJoin('user_emails','users.id','user_emails.user_id')
    .select([
      'users.id as userID',
      'users.name as userName',
      knex.raw('ARRAY_AGG(user_emails.adress) as email')
    ])
    .groupBy('users.id','users.name')
*/
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
