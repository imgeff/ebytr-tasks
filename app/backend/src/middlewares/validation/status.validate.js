require('express-async-errors');

const { ConflictError } = require('../../helpers/error/customError');
const { statusExists } = require('../../helpers/validation/statusExists');
const { validateSchema } = require('../../helpers/validation/validateSchema');
const { StatusSchema } = require('../../schemas/status.schema');

const validateNewStatus = async (req, _res, next) => {
  const { name } = req.body;
  const newStatus = { name };
  validateSchema(StatusSchema)(newStatus);

  if (await statusExists(name)) ConflictError('Status');

  return next();
};

module.exports = {
  validateNewStatus,
};
