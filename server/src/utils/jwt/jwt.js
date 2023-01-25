const jwt = require('jsonwebtoken');

class JWT {
  static generateToken(id, email) {
    return jwt.sign({ id, email }, process.env.SECRET_KEY_JWT, {
      expiresIn: '1d',
    });
  }

  static verifyToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY_JWT);
  }
}

module.exports = JWT;
