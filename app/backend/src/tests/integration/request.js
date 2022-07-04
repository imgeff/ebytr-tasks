const  chai = require('chai');
const app = require('../../app');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const chaiRequest = async (route, body) => {
  return await chai.request(app).post(route).send(body);
}

module.exports = {
  chaiRequest,
}
