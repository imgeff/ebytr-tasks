const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user.route');
const taskRoute = require('./routes/task.route');
const statusRoute = require('./routes/status.route');
const { errorManager } = require('./middlewares/error');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', userRoute);

app.use('/tasks', taskRoute);

app.use('/status', statusRoute);

app.use(errorManager);

module.exports = app;
