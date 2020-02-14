const express = require('express');

const Actions = require('./data/helpers/actionModel');
const Projects = require('./data/helpers/projectModel');
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
	res.send(`<h2>Let's write some code!</h2>`);
});

/*
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);
*/

module.exports = server;
