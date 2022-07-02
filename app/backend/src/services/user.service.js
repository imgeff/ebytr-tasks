const model = require('../database/models');

const create = async (user) => {
  const { dataValues: { id, name } } = await model.User.create(user);
  const userCreated = { id, name };
  return userCreated;
};

const getByKey = async (key) => {
  const user = await model.User.findOne({ where: key, raw: true });
  return user;
}

module.exports = {
  create,
  getByKey,
};
