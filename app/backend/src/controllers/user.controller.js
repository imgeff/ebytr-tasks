require('express-async-errors');

const { hashSync } = require('bcryptjs');
const { generateToken } = require('../helpers/token');
const userService = require('../services/user.service');

const create = async (req, res) => {
  req.body.password = hashSync(req.body.password, 10);
  const { name, email, password } = req.body;
  const user = { name, email, password };

  const userCreated = await userService.create(user);
  const token = generateToken(userCreated);
  return res.status(200).json({ ...userCreated, token });
};

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };
  const userAuthenticated = await userService.authenticate(user);

  const token = generateToken(userAuthenticated);
  return res.status(200).json({ token });
};

module.exports = {
  create,
  authenticate,
};
