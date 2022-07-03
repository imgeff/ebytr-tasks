const taskService = require('../services/task.service');

const create = async (req, res) => {
  const { userId, statusId, task } = req.body;
  const newTask = { statusId, task };
  const taskCreated = await taskService.create(newTask, userId);
  return res.status(201).json(taskCreated);
}

module.exports = {
  create,
}
