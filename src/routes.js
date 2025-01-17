const express = require('express');
const authController = require('./controllers/auth-controller');
const welcomeController = require('./controllers/welcome-controller');
const { optionalAuth } = require('./middlewares/auth-middlewares');

const router = express.Router();

router.post('/auth/register', authController.register)

router.post('/auth/login', authController.login);

router.get('/welcome', optionalAuth, welcomeController.welcome)

module.exports = router;