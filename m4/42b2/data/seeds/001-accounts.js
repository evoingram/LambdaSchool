exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('accounts')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('accounts').insert([
				{
					id: 1,
					VIN: 'rowValue1',
					make: 'make',
					model: 'model',
					transmissionType: 'transmission type',
					titleStatus: 'title status',
					mileage: 'mileage'
				},
				{
					id: 1,
					VIN: 'rowValue1',
					make: 'make',
					model: 'model',
					transmissionType: 'transmission type',
					titleStatus: 'title status',
					mileage: 'mileage'
				},
				{
					id: 1,
					VIN: 'rowValue1',
					make: 'make',
					model: 'model',
					transmissionType: 'transmission type',
					titleStatus: 'title status',
					mileage: 'mileage'
				}
			]);
		});
};
