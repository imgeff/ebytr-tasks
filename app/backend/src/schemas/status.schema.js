const Joi = require('joi');

const StatusSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

module.exports = {
  StatusSchema,
};
