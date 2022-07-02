const { compareSync } = require('bcryptjs');
const model = require('../database/models');
const { NotFoundError, NotAuthorizedError } = require('../helpers/error/customError');

const create = async (user) => {
  const { dataValues: { id, name } } = await model.User.create(user);
  const userCreated = { id, name };
  return userCreated;
};

const getByKey = async (key) => {
  const user = await model.User.findOne({ where: key, raw: true });
  return user;
};

const authenticate = async ({ email, password }) => {
  const user = await getByKey({ email });
  if (!user) NotFoundError('User');

  const { id, username, password: hash } = user;
  const isRealPassword = compareSync(password, hash);
  if (!isRealPassword) NotAuthorizedError('User');

  return { id, username };
};

module.exports = {
  create,
  getByKey,
  authenticate,
};
