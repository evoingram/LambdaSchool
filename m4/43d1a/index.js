require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`\n** api on port ${PORT} **\n`));
