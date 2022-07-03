const model = require('../database/models');

const getAll = async () => {
  const status = await model.Status.findAll({ raw: true });
  return status
}

module.exports = {
  getAll,
}
