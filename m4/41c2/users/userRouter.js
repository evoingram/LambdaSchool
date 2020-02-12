const express = 'express';
const users = require('./userDB');
const posts = require('../posts/postDB');

const router = express.Router();

router.post('/', (req, res) => {});

router.post('/:id/posts', (req, res) => {});

router.get('/', (req, res) => {});

router.get('/:id', (req, res) => {});

router.get('/:id/posts', (req, res) => {});

router.delete('/:id', (req, res) => {});

router.put('/:id', (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {
	users
		.getById(req.params.id)
		.then(user => {
			if (user) {
				req.user = user;
				next();
			} else {
				res.status(500).json({
					errorMessage: 'No user with this ID exists'
				});
			}
		})
		.catch(error => {
			res.status(500).json({ errorMessage: 'ID required', error });
		});
}

function validateUser(req, res, next) {
	const name = req.body.name;
	if (!name) {
		res.status(404).json({ errorMessage: 'missing user data' });
	} else {
		req.user = name;
		next();
	}
}

function validatePost(req, res, next) {
	const post = (req.body.text, req.params.id);
	if (!req.body.text) {
		res.status(404).json({ errorMessage: 'missing post data' });
	} else {
		req.text = post;
		next();
	}
}

module.exports = router;
