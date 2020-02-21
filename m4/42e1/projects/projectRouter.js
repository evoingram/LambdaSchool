const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
	Projects.getProjects()
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.get('/:id/shoppingList', (req, res) => {
	const id = req.params.id;

	Projects.getShoppingList(id)
		.then(recipe => {
			if (recipe) {
				res.json(recipe);
			} else {
				res.status(404).json({ message: 'Could not find recipe with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.get('/:id/instructions', (req, res) => {
	const { id } = req.params;

	Projects.getInstructions(id)
		.then(instructions => {
			if (instructions.length) {
				res.json(instructions);
			} else {
				res.status(404).json({ message: 'Could not find instructions for given recipe' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get instructions' });
		});
});
router.get('/ingredients/:id/projects', (req, res) => {
	const { id } = req.params;
	Projects.getIngredientProjects(id)
		.then(recipelist => {
			if (recipelist.length) {
				res.json(recipelist);
			} else {
				res.status(404).json({ message: 'Could not find projects for given ingredient' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.post('/', (req, res) => {
	const recipeData = req.body;

	Projects.add(recipeData)
		.then(recipe => {
			res.status(201).json(recipe);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new recipe' });
		});
});

router.post('/:id/steps', (req, res) => {
	const stepData = req.body;
	const { id } = req.params;

	Projects.findById(id)
		.then(recipe => {
			if (recipe) {
				Projects.addStep(stepData, id).then(step => {
					res.status(201).json(step);
				});
			} else {
				res.status(404).json({ message: 'Could not find recipe with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new step' });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Projects.findById(id)
		.then(recipe => {
			if (recipe) {
				Projects.update(changes, id).then(updatedRecipe => {
					res.json(updatedRecipe);
				});
			} else {
				res.status(404).json({ message: 'Could not find scheme with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update scheme' });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Projects.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: 'Could not find scheme with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to delete scheme' });
		});
});

module.exports = router;
