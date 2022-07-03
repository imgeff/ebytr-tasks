require('express-async-errors');

const { authenticateToken } = require('../../helpers/token/index');
const { validateSchema } = require('../../helpers/validation/validateSchema');
const { NewTaskSchema } = require('../../schemas/task.schema');

const validateNewTask = async (req, _res, next) => {
  const { authorization: token } = req.headers;
  const { id: userId } = authenticateToken(token);
  const { statusId, task } = req.body;
  const newTask = { userId, statusId, task };
  validateSchema(NewTaskSchema)(newTask);

  req.body = newTask;
  return next();
};

module.exports = {
  validateNewTask,
};
