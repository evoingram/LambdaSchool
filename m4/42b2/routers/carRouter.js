const express = require('express');

const router = express.Router();
const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);
// export for use in codebase

router.get('/', (req, res) => {
	db('cars')
		.then(fruits => {
			res.json(fruits);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to retrieve cars' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	db('cars')
		.where({ id })
		.first()
		.then(fruit => {
			res.json(fruit);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to retrieve car' });
		});
});

router.post('/', (req, res) => {
	const fruitData = req.body;
	db('cars')
		.insert(fruitData)
		.then(ids => {
			db('cars')
				.where({ id: ids[0] })
				.then(newFruitEntry => {
					res.status(201).json(newFruitEntry);
				});
		})
		.catch(err => {
			console.log('POST error', err);
			res.status(500).json({ message: 'Failed to store car' });
		});
});

module.exports = router;
