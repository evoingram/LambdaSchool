const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const cohortsRouter = require('../cohorts/router.js');
const studentsRouter = require('../students/router.js');
// const restricted = require('../foldername/restrictedMW.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

server.get('/', (req, res) => {
	res.send('API is live.');
});

module.exports = server;
