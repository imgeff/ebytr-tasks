require('express-async-errors');

const { NotAuthorizedError } = require('../../helpers/error/customError');
const { userExists } = require('../../helpers/validation/userExists');
const { validateSchema } = require('../../helpers/validation/validateSchema');
const { UserSchema, LoginSchema } = require('../../schemas/user.schema');

const validateNewUser = async (req, _res, next) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };
  validateSchema(UserSchema)(newUser);

  if (await userExists({ email })) NotAuthorizedError('User', 'User Already Exist');

  return next();
};

const validateUserLogin = (req, res, next) => {
  const { email, password } = req.body;
  const userLogin = { email, password };
  validateSchema(LoginSchema)(userLogin);

  return next();
};

module.exports = {
  validateNewUser,
  validateUserLogin,
};
