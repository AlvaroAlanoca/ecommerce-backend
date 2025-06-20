class AuthController {
  constructor(signInUseCase, refreshTokenUseCase) {
    this.signInUseCase = signInUseCase;
    this.refreshTokenUseCase = refreshTokenUseCase;
  }

  async signIn(req, res) {
    try {
      const result = await this.signInUseCase(req.body);
      res.json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      const result = await this.refreshTokenUseCase(refreshToken);
      res.json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

module.exports = AuthController;