const { Router } = require('express');
const taskController = require('../controllers/task.controller');
const { validateNewTask } = require('../middlewares/validation/task.validate');

const route = Router();

route.post('/', validateNewTask, taskController.create);

module.exports = route;
