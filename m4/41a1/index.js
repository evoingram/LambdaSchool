// import express from 'express'; //es2015 Modules

const express = require('express'); // CommonJS Modules

const server = express();

server.get('/', (req, res) => {
	res.json({ hello: 'Web26' });
});

const port = 5000;

server.listen(port, () => console.log(`\n** API on port 5000 ${port} \n`));

// npm i express
