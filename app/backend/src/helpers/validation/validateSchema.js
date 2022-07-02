const schemaErrors = [
  {
    name: 'ValidationError',
    types: [
      'string.base',
      'string.min',
      'string.max',
      'string.email',
      'string.empty',
      'number.base',
      'number.min',
      'number.max'
    ],
  },
  {
    name: 'RequiredError',
    types: ['any.required'],
  },
];

const validateSchema = (schema) => (data) => {
  const { error: schemaFailed } = schema.validate(data);

  if (schemaFailed) {
    const errorDetails = schemaFailed.details[0];
    const error = new Error(errorDetails.message);

    const nameError = schemaErrors.find((error) => error.types.includes(errorDetails.type)).name;
    error.name = nameError;
    throw error;
  }
};

module.exports = {
  validateSchema,
};
