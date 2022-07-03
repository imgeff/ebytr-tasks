const { Router } = require('express');
const { validateNewStatus } = require('../middlewares/validation/status.validate');
const statusController = require('../controllers/status.controller');

const route = Router();

route.get('/', statusController.getAll);

route.post('/', validateNewStatus, statusController.create);

module.exports = route;
