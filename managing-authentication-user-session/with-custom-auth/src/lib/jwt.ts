import { UserInfoType, UserType } from '@/types/user';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'my_jwt_password';

export const encode = (payload: UserInfoType) => {
  return jwt.sign(payload, JWT_SECRET);
};

export const decode = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
