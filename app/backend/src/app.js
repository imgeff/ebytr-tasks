const express = require('express');
const userRoute = require('./routes/user.route');
const statusRoute = require('./routes/status.route');
const { errorManager } = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/users', userRoute);

app.use('/status', statusRoute);

app.use(errorManager);

module.exports = app;
