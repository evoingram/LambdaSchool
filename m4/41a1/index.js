// import express from 'express'; //es2015 Modules

const express = require('express'); // CommonJS Modules

const Hubs = require('./data/hubs-model.js');
const server = express();

server.get('/', (req, res) => {
	res.json({ hello: 'Web26' });
	res.status(200);
});

// view list of hubs
server.get('/api/hubs', (req, res) => {
	Hubs.find()
		.then(hubs => {
			console.log(hubs);
			res.status(200).json(hubs);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ errorMessage: 'oops' });
		});
});

const port = 5000;

server.listen(port, () => console.log(`\n** API on port 5000 ${port} \n`));

// npm i express
