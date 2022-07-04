const  sinon = require('sinon');
const  chai = require('chai');

const { User } = require('../../../database/models/index');
const Bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const { userDB, userResponse, user }=require('./data');
const {chaiRequest}=require('../request');

const { expect } = chai;

describe('Casos de Sucesso da rota POST /users', () => {
  describe('É possível criar um usuário com dados válidos', () => {

    beforeEach(async () => {
      sinon.stub(User, "findOne").resolves(null);
      sinon.stub(User, "create").resolves({ dataValues: {...userDB} });
      sinon.stub(Bcrypt, "hashSync").returns('$2a$10$e1P6QverACYxAvLKxL.DIeHcQwAQJHU1FW1gf161uh3ca0WMaPpcm');
      sinon.stub(JWT, "sign").returns(userResponse.token);
    });

    afterEach(() => {
      User.findOne.restore();
      User.create.restore();
      Bcrypt.hashSync.restore();
      JWT.sign.restore();
    })

    it('O status code é 201', async () => {
      const chaiResponse = await chaiRequest('/users', user);

      expect(chaiResponse.status).to.be.equal(201);
    });

    it('Body contém os campos id, name e token', async () => {
      const chaiResponse = await chaiRequest('/users', user);

      expect(chaiResponse.body).to.have.property('id');
      expect(chaiResponse.body).to.have.property('name');
      expect(chaiResponse.body).to.have.property('token');
      expect(chaiResponse.body.token.length > 0).to.be.equal(true);
    });

  })

});

describe('Casos de Falha da rota POST /users', () => {
  describe('Não é possível criar usuário com dados inválidos', () => {

    it('Sem o campo name', async () => {
      const chaiResponse = await chaiRequest('/users', { "email": user.email, "password": user.password });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    it('Com o campo name sendo um número', async () => {
      const chaiResponse = await chaiRequest('/users', { ...user, "name": 1 });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    it('Com name contendo menos de 3 caracteres', async () => {
      const chaiResponse = await chaiRequest('/users', { ...user, "name": "ab" });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    it('Sem o campo password', async () => {
      const chaiResponse = await chaiRequest('/users', { "name": user.name, "email": user.email });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    it('Com o campo password contendo menos de 6 caracteres ', async () => {
      const chaiResponse = await chaiRequest('/users', { ...user, "password": "teste" });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    it('Com o campo password sendo do tipo number ', async () => {
      const chaiResponse = await chaiRequest('/users', { ...user, "password": 123456 });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    it('Sem o campo email', async () => {
      const chaiResponse = await chaiRequest('/users', { "name": user.name, "password": user.password });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    it('Com email inválido', async () => {
      const chaiResponse = await chaiRequest('/users', { ...user, "email": "teste" });

      expect(chaiResponse.status).to.be.equal(400);
      expect(chaiResponse.body).to.have.property('message');
    });

    before(async () => {
      sinon.stub(User, "findOne").resolves(userDB);
    });

    after(() => {
      User.findOne.restore();
    })

    it('Com um email já cadastrado', async () => {
      const chaiResponse = await chaiRequest('/users', user);

      expect(chaiResponse.status).to.be.equal(409);
      expect(chaiResponse.body).to.have.property('message', 'User already exists');
    });

  })

})
