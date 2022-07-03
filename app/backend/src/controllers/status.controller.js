require('express-async-errors');

const statusService = require('../services/status.service');

const getAll = async (_req, res) => {
  const status = await statusService.getAll();
  return res.status(200).json(status);
}

const create = async (req, res) => {
  const { name } = req.body;
  const status = { name };
  const statusCreated = await statusService.create(status);
  return res.status(201).json(statusCreated);
}

module.exports = {
  getAll,
  create,
}
