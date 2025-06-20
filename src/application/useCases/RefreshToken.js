const jwt = require('jsonwebtoken');
const config = require('../../../config');

const refreshTokenUseCase = async (refreshToken) => {
  if (!refreshToken) throw new Error('Refresh token requerido');

  try {
    const decoded = jwt.verify(refreshToken, config.refreshSecret);
    const newAccessToken = jwt.sign(
      { id: decoded.id, roles: decoded.roles },
      config.jwtSecret,
      { expiresIn: '15m' }
    );

    return { accessToken: newAccessToken };
  } catch (error) {
    throw new Error('Refresh token inválido o expirado');
  }
};

module.exports = refreshTokenUseCase;