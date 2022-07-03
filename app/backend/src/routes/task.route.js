const { Router } = require('express');
const taskController = require('../controllers/task.controller');
const {
  validateNewTask,
  validateUpdateTask,
  validateDeleteTask,
} = require('../middlewares/validation/task.validate');

const route = Router();

route.get('/', taskController.getAllFromUser);

route.post('/', validateNewTask, taskController.create);

route.put('/', validateUpdateTask, taskController.update);

route.delete('/', validateDeleteTask, taskController.destroy);

module.exports = route;
