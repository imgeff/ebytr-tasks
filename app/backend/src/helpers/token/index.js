require('dotenv/config');
const { sign, verify } = require('jsonwebtoken');



const jwtConfig = { algorithm: 'HS256', expiresIn: '3h' };
const SECRET = process.env.SECRET;

const generateToken = (payload) => {
  const token = sign(payload, SECRET, jwtConfig);
  return token;
}

const authenticateToken = (token) => {
  const payload = verify(token, SECRET, jwtConfig);
  return payload;
}


module.exports = { generateToken, authenticateToken };
