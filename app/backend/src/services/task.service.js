const models = require('../database/models');

const create = async (task, userId) => {
  const { dataValues: { id }} = await models.Task.create(task);
  const registerUserTask = await models.UserTask.create({ userId, taskId: id });
  return registerUserTask;
}

module.exports = {
  create,
}
