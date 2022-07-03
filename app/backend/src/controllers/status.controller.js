const statusService = require('../services/status.service');

const getAll = async (_req, res) => {
  const status = await statusService.getAll();
  return res.status(200).json(status);
}

module.exports = {
  getAll,
}
