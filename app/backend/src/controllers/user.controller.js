const { hashSync } = require('bcryptjs');
const {generateToken}=require('../helpers/token');
const userService = require('../services/user.service');
require('express-async-errors');

const create = async (req, res) => {
  req.body.password = hashSync(req.body.password, 10);
  const { name, email, password } = req.body;
  const user = { name, email, password };

  const userCreated = await userService.create(user);
  const token = generateToken(userCreated);
  return res.status(200).json({ ...userCreated, token });
};

module.exports = {
  create,
};
