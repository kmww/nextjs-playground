import { AuthenticationError } from 'apollo-server-core';
import UserData from '../entities/UserData';
import jwt from 'jsonwebtoken';
import { IncomingHttpHeaders } from 'http';
import { Response } from 'express';

export const DEFAULT_JWT_SECRET_KEY = 'secret-key';
export const REFRESH_JWT_SECRET_KEY = 'secret-key2';

export interface JwtVerifiedUser {
  userId: UserData['id'];
}

export const createAccessToken = (user: UserData): string => {
  const userData: JwtVerifiedUser = { userId: user.id };
  const accessToken = jwt.sign(
    userData,
    process.env.JWT_SECRET_KEY || DEFAULT_JWT_SECRET_KEY,
    { expiresIn: '60m' },
  );

  return accessToken;
};

export const verifyAccessToken = (
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

export const verifyAccessTokenFromReqHeaders = (
  headers: IncomingHttpHeaders,
): JwtVerifiedUser | null => {
  const { authorization } = headers;
  if (!authorization) return null;

  const accessToken = authorization.split(' ')[1];
  try {
    return verifyAccessToken(accessToken);
  } catch {
    return null;
  }
};

export const createRefreshToken = (user: UserData): string => {
  const userData: JwtVerifiedUser = { userId: user.id };
  return jwt.sign(
    userData,
    process.env.JWT_REFRESH_SECRET_KEY || REFRESH_JWT_SECRET_KEY,
    { expiresIn: '14d' },
  );
};

export const setRefreshTokenHeader = (
  res: Response,
  refreshToken: string,
  IsSecure: boolean,
): void => {
  res.cookie('refreshtoken', refreshToken, {
    httpOnly: true,
    secure: IsSecure ? true : process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
};
