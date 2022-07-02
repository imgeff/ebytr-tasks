const { getByKey } = require('../../services/user.service');

const userExists = async (email) => {
  const user = await getByKey(email);
  if (user !== null) return true;
  return false;
};

module.exports = { userExists };
