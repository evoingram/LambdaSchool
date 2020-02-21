exports.up = function(knex) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments('projectid');
			tbl.text('projectname', 128)
				.unique()
				.notNullable();
			tbl.text('projectdescription', 128);
			tbl.boolean('projectcompleted', 128)
				.defaultTo('false')
				.notNullable();
		})
		.createTable('tasks', tbl => {
			tbl.increments('taskid');
			tbl.integer('projectid')
				.unsigned()
				.notNullable()
				.references('projectid')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.text('tasknotes', 128);
			tbl.text('taskdescription').notNullable();
			tbl.boolean('taskcompleted', 128)
				.defaultTo('false')
				.notNullable();
		})
		.createTable('resources', tbl => {
			tbl.increments('resourceid');
			tbl.text('resourcename').notNullable();
			tbl.text('resourcedescription', 128);
		})
		.createTable('projectsresources', tbl => {
			tbl.integer('projectid')
				.unsigned()
				.notNullable()
				.references('projectid')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.integer('resourceid')
				.unsigned()
				.notNullable()
				.references('resourceid')
				.inTable('resources')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('project')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projectsresources');
};
