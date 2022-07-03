const { getByName } = require('../../services/status.service');

const statusExists = async (name) => {
  const status = await getByName(name);
  if (status !== null) return true;
  return false;
};

module.exports = { statusExists };
