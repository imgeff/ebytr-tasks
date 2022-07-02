require('dotenv/config');

const app = require('./app');

const PORT = process.env.PORT;

const server = app.listen(PORT, () => console.log(
  `server running at: http://localhost:${PORT}`,
));

module.exports = server;
