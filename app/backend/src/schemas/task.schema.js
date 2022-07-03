const Joi = require('joi');

const NewTaskSchema = Joi.object({
  userId: Joi.number().min(1).required(),
  statusId: Joi.number().min(1).required(),
  task: Joi.string().min(2).required(),
});

const UpdateTaskSchema = Joi.object({
  taskId: Joi.number().min(1).required(),
  statusId: Joi.number().min(1).required(),
  task: Joi.string().min(2).required(),
});

const DeleteTaskSchema = Joi.object({
  userId: Joi.number().min(1).required(),
  taskId: Joi.number().min(1).required(),
});

module.exports = {
  NewTaskSchema,
  DeleteTaskSchema,
  UpdateTaskSchema,
};
