exports.seed = function(knex) {
	// the database will return 1 for true and 0 for false
	// extra code is required to convert 1 to true & 0 to false.
	return knex('projects').insert([
		{
			id: 1,
			name: 'project name here',
			description: 'the project description',
			completed: false
		}
	]);
};
