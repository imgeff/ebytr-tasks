const errors = [
  {
    code: 400,
    types: ['RequiredError', 'ValidationError'],
  },
  {
    code: 401,
    types: ['NotAuthorizedError', 'JsonWebTokenError', 'TokenExpiredError'],
  },
  {
    code: 404,
    types: ['NotFoundError'],
  },
];

const errorManager = (err, _req, res, _next) => {
  const { name, message } = err;

  const typeError = errors.find((error) => error.types.includes(name));

  if (typeError !== undefined) {
    return res.status(typeError.code).json({ message });
  }

  console.error(err);
  return res.sendStatus(500);
};

module.exports = { errorManager };
