const { expect } = require('chai');
const { validateSchema } = require('../../../../helpers/validation/validateSchema');
const { NewTaskSchema } = require('../../../../schemas/task.schema');
const { task, invalidTask }=require('./data');

describe('Função validateSchema', () => {

  describe('Quando recebe dados válidos', () => {

    it('retorna undefinned', () => {
      const resultValidateSchema = validateSchema(NewTaskSchema)(task);
      expect(resultValidateSchema).to.be.undefined;
    });

  });

  describe('Quando recebe dados válidos', () => {

    it('lança uma exceção', async() => {
      const resultValidateSchema = () => validateSchema(NewTaskSchema)(invalidTask);
      expect(resultValidateSchema).to.throw();
    });

  });
})
