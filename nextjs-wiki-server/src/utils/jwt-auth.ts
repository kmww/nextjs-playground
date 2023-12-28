import { AuthenticationError } from 'apollo-server-core';
import UserData from '../entities/UserData';
import jwt from 'jsonwebtoken';

export const DEFAULT_JWT_SECRET_KEY = 'secret-key';

export interface JwtVerifiedUser {
  userId: UserData['id'];
}

export const createAccessToken = (user: UserData): string => {
  const userData: JwtVerifiedUser = { userId: user.id };
  const accessToken = jwt.sign(
    userData,
    process.env.JWT_SECRET_KEY || DEFAULT_JWT_SECRET_KEY,
    { expiresIn: '30m' },
  );

  return accessToken;
};

export const verifyAccessToke = (
  accessToken?: string,
): JwtVerifiedUser | null => {
  if (!accessToken) return null;
  try {
    const verifed = jwt.verify(
      accessToken,
      process.env.JWT_SECRET_KEY || DEFAULT_JWT_SECRET_KEY,
    ) as JwtVerifiedUser;
    return verifed;
  } catch (error) {
    console.error('access_token expired: ', error.expiredAt);
    throw new AuthenticationError('access token expired');
  }
};
