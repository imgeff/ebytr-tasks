require('express-async-errors');

const { authenticateToken } = require('../helpers/token');
const taskService = require('../services/task.service');

const getAllFromUser = async (req, res) => {
  const { authorization: token } = req.headers;
  const { id: userId } = authenticateToken(token);
  const tasks = await taskService.getAllFromUser(userId);
  return res.status(200).json(tasks);
};

const create = async (req, res) => {
  const { userId, statusId, task } = req.body;
  const newTask = { userId, statusId, task };
  const taskCreated = await taskService.create(newTask);
  return res.status(201).json(taskCreated);
};

const update = async (req, res) => {
  const { taskId, statusId, task } = req.body;
  const newTask = { statusId, task };
  await taskService.update(newTask, taskId);
  return res.status(200).json({ message: `task ${taskId} updated` });
};

const destroy = async (req, res) => {
  const { userId, taskId } = req.body;
  const task = { userId, taskId };
  await taskService.destroy(task);
  return res.sendStatus(204);
};

module.exports = {
  create,
  update,
  destroy,
  getAllFromUser,
};
