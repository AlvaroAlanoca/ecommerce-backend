const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

module.exports = (signInUseCase, refreshTokenUseCase) => {
  const router = Router();
  const controller = new AuthController(signInUseCase, refreshTokenUseCase);

  // POST /api/v1/auth/signin
  router.post('/signin', controller.signIn.bind(controller));

  // POST /api/v1/auth/refresh-token
  router.post('/refresh-token', controller.refreshToken.bind(controller));

  return router;
};