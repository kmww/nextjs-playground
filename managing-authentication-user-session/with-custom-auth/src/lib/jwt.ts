import jwt from 'jsonwebtoken';

const JWT_SECRET = 'my_jwt_password';

export const encode = (payload) => {
  return jwt;
};
