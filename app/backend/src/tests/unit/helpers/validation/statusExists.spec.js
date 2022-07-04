const sinon = require('sinon');
const { Status } = require('../../../../database/models/index');
const { expect } = require('chai');
const { statusExists } = require('../../../../helpers/validation/statusExists');
const { statusDb }=require('./data');


describe('Função statusExists', () => {
  describe('Quando um status é encontrado', () => {

    before(async() => {
      sinon.stub(Status, "findOne").resolves(statusDb);
    });

    after(async () => {
      Status.findOne.restore();
    });

    it('retorna o valor boolean true', async() => {
      const resultStatusExists = await statusExists('pronto');
      expect(resultStatusExists).to.be.true;
    });

  });

  describe('Quando nenhum status é encontrado', async() => {

    before(async() => {
      sinon.stub(Status, "findOne").resolves(null);
    });

    after(async () => {
      Status.findOne.restore();
    });

    it('retorna o valor boolean false', async() => {
      const resultStatusExists = await statusExists('finalizado');
      expect(resultStatusExists).to.be.false;
    });

  });
})
