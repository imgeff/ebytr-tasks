const { Router } = require('express');
const { validateNewUser } = require('../middlewares/validation/user.validate');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/', validateNewUser, userController.create);

module.exports = route;
