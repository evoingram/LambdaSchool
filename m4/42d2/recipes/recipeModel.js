const db = require('../data/db-config');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
	add,
	update,
	remove
};
// `getRecipes()`: should return a list of all recipes in the database.
function getRecipes() {
	return db('recipes');
}
// `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe

/*
SELECT ingredients.ingredientname
FROM ingredients 
JOIN recipesingredients ON recipesingredients.ingredientsid=ingredients.ingredientsid
JOIN recipes ON recipesingredients.recipeid=recipes.recipeid
WHERE recipes.recipeid=1;
*/
function getShoppingList(recipeid) {
	return db('recipes')
		.where({ recipeid: recipeid })
		.join('recipesingredients', 'recipes.recipeid', 'recipesingredients.recipeid')
		.join('ingredients', 'recipesingredients.ingredientsid', 'ingredients.ingredientsid')
		.select('ingredients.ingredientname');
}
// `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
/*
SELECT instructions.instruction, instructions.stepnumber
FROM instructions 
JOIN recipesinstructions ON recipesinstructions.instructionsid=instructions.instructionsid
JOIN recipes ON recipesinstructions.recipeid=recipes.recipeid
WHERE recipes.recipeid=1
Order BY instructions.stepnumber
*/
function getInstructions(id) {
	return db('recipes')
		.where({ id })
		.first();
}
function add(recipe) {
	db('recipes')
		.insert(recipe)
		.then(ids => {
			return findById(ids[0]);
		});
}
function update(newrecipe, id) {
	db('recipes')
		.where({ id })
		.update(newrecipe)
		.then(ids => {
			return ids;
		});
}

function remove(id) {
	let recipe = findById(id);
	db('recipes')
		.delete()
		.where({ id: id })
		.then(ids => {
			return recipe;
		});
}

function update(id, changes) {
	return db('users')
		.where({ id })
		.update(changes);
}
