const { Router } = require('express');
const { validateNewUser, validateUserLogin } = require('../middlewares/validation/user.validate');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/', validateNewUser, userController.create);

route.post('/login', validateUserLogin, userController.authenticate);

module.exports = route;
