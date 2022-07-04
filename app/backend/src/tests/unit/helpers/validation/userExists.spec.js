const sinon = require('sinon');
const { User } = require('../../../../database/models/index');
const { expect } = require('chai');
const { userExists } = require('../../../../helpers/validation/userExists');
const { userDB }=require('./data');


describe('Função userExists', () => {
  describe('Quando um usuário é encontrado', () => {

    before(async() => {
      sinon.stub(User, "findOne").resolves(userDB);
    });

    after(async () => {
      User.findOne.restore();
    });

    it('retorna o valor boolean true', async() => {
      const resultUserExists = await userExists('teste@teste.com');
      expect(resultUserExists).to.be.true;
    });

  });

  describe('Quando nenhum usuário é encontrado', async() => {

    before(async() => {
      sinon.stub(User, "findOne").resolves(null);
    });

    after(async () => {
      User.findOne.restore();
    });

    it('retorna o valor boolean false', async() => {
      const resultUserExists = await userExists('unknown@unknown.com');
      expect(resultUserExists).to.be.false;
    });

  });
})
