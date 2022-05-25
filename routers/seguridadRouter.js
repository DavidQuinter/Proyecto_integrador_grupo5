const express = require('express');
const router = express.Router();

const indexController = require('../controllers/seguridadControllers');

router.get('/',indexController.login);

router.get('/recuperar',indexController.recuperar);

router.get('/register',indexController.register);


module.exports = router;