exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			id: 1,
			projectid: 1,
			description: 'task description',
			notes: 'the task notes',
			completed: false // or true
		},
		{
			id: 7,
			projectid: 1,
			description: 'another task description',
			notes: 'the task notes',
			completed: false // or true
		}
	]);
};
