const express = require('express');
const sayHello = require('../controllers/helloController');

const router = express.Router();

router.get('/', sayHello);

module.exports = router;
