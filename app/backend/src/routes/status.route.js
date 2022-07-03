const { Router } = require('express');
const statusController = require('../controllers/status.controller');

const route = Router();

route.get('/', statusController.getAll);

module.exports = route;
