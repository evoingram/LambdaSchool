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
// still need to fix:
function update(scheme) {
	db('schemes')
		.update(scheme)
		.then(ids => {
			return findById(ids[0]);
		});
}

function remove(id) {
	db('schemes')
		.delete(id)
		.then(ids => {
			return find();
		});
}
