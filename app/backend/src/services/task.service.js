const models = require('../database/models');

const getAllFromUser = async (userId) => {
  const tasks = await models.Task.findAll({
    include: [
      {
        as: 'user',
        model: models.User,
        attributes: { exclude: ['id', 'email', 'password'] },
      },
      {
        as: 'status',
        model: models.Status,
        attributes: { exclude: ['id'] },
      },
    ],
    attributes: { exclude: ['userId', 'statusId'] },
    raw: true,
    where: { userId },
  });

  return tasks;
};

const create = async (task) => {
  const taskCreated = await models.Task.create(task);
  return taskCreated;
};

const update = async (task, taskId) => {
  const taskUpdated = await models.Task.update(task, { where: { id: taskId } });
  return taskUpdated;
};

const destroy = async (task) => {
  await models.Task.destroy({ where: { id: task.taskId } });
};

module.exports = {
  create,
  destroy,
  update,
  getAllFromUser,
};
