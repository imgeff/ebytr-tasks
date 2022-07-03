const model = require('../database/models');

const getAll = async () => {
  const status = await model.Status.findAll({ raw: true });
  return status
}

const getByName = async (name) => {
  const status = await model.Status.findOne({ where: { name }, raw: true })
  return status;
}

const create = async (status) => {
  const statusCreated = await model.Status.create(status);
  return statusCreated;
}

module.exports = {
  getAll,
  getByName,
  create,
}
