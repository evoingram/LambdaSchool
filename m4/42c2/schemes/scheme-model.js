function find() {
	return db('schemes');
}
function findById(id) {
	return db('schemes')
		.where({ id })
		.first();
}

function findSteps(id) {
	return db('schemes')
		.where({ id })
		.first();
}
function add(scheme) {
	db('schemes')
		.insert(scheme)
		.then(ids => {
			return findById(ids[0]);
		});
}
function update(newScheme, id) {
	db('schemes')
		.where({ id: id })
		.update(id, newScheme)
		.then(ids => {
			return findById(id);
		});
}

function remove(id) {
	let scheme = findById(id);
	db('schemes');
	db('schemes')
		.delete(id)
		.then(ids => {
			return scheme;
		});
}
