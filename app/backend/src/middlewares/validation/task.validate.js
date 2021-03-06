require('express-async-errors');

const { authenticateToken } = require('../../helpers/token/index');
const { validateSchema } = require('../../helpers/validation/validateSchema');
const { NewTaskSchema, UpdateTaskSchema, DeleteTaskSchema } = require('../../schemas/task.schema');

const validateNewTask = async (req, _res, next) => {
  const { authorization: token } = req.headers;
  const { id: userId } = authenticateToken(token);
  const { statusId, task } = req.body;
  const newTask = { userId, statusId, task };
  validateSchema(NewTaskSchema)(newTask);

  req.body = newTask;
  return next();
};

const validateUpdateTask = async (req, _res, next) => {
  const { authorization: token } = req.headers;
  authenticateToken(token);
  const { taskId, statusId, task } = req.body;
  const newTask = { taskId, statusId, task };
  validateSchema(UpdateTaskSchema)(newTask);

  return next();
};

const validateDeleteTask = async (req, _res, next) => {
  const { authorization: token } = req.headers;
  const { id: userId } = authenticateToken(token);
  const { taskId } = req.body;
  const task = { userId, taskId };
  validateSchema(DeleteTaskSchema)(task);

  req.body = task;
  return next();
};

module.exports = {
  validateNewTask,
  validateUpdateTask,
  validateDeleteTask,
};
