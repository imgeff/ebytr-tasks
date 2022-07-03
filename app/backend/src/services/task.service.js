const models = require('../database/models');

const create = async (task, userId) => {
  const { dataValues: { id }} = await models.Task.create(task);
  const registerUserTask = await models.UserTask.create({ userId, taskId: id });
  return registerUserTask;
}

const update = async (task, taskId) => {
  const taskUpdated = await models.Task.update(task, { where: { id: taskId } });
  return taskUpdated;
}

const destroy = async (task) => {
  await models.Task.destroy({ where: { id: task.taskId }});
  await models.UserTask.destroy({ where: task });
}

module.exports = {
  create,
  destroy,
  update,
}
