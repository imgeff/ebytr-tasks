const { userExists } = require("../../helpers/validation/userExists");
const { validateSchema } = require("../../helpers/validation/validateSchema");
const { UserSchema } = require("../../schemas/user.schema");
require('express-async-errors');

const validateNewUser = async (req, _res, next) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };
  validateSchema(UserSchema)(newUser);

  if (await userExists({ email })) {
    return next({ name: 'NotAuthorizedError', message: 'User Already Exist' });
  }

  return next();
}

module.exports = {
  validateNewUser,
}
