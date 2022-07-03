const NotFoundError = (entity, message = `${entity} not found`) => {
  const error = new Error(message);
  error.name = 'NotFoundError';
  throw error;
};

const NotAuthorizedError = (entity, message = `${entity} not authorized`) => {
  const error = new Error(message);
  error.name = 'NotAuthorizedError';
  throw error;
};

const ConflictError = (entity, message = `${entity} already exists`) => {
  const error = new Error(message);
  error.name = 'ConflictError';
  throw error;
};

module.exports = {
  NotFoundError,
  NotAuthorizedError,
  ConflictError,
};
