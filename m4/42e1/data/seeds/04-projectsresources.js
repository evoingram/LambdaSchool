exports.seed = function(knex) {
	return knex('recipesingredients').insert([
		{
			projectid: 1,
			resourceid: 2
		},
		{
			projectid: 1,
			resourceid: 1
		}
	]);
};
