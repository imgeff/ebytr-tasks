const { Router } = require('express');
const taskController = require('../controllers/task.controller');
const { validateNewTask, validateDeleteTask } = require('../middlewares/validation/task.validate');

const route = Router();

route.post('/', validateNewTask, taskController.create);

route.delete('/', validateDeleteTask, taskController.destroy);

module.exports = route;
