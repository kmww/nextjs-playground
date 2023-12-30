import { AuthenticationError } from 'apollo-server-express';
import { MyContext } from '../apollo/createApolloServer';
import { MiddlewareFn } from 'type-graphql';
import { verifyAccessToken } from '../utils/jwt-auth';

export const isAuthenticated: MiddlewareFn<MyContext> = async (
  { context },
  next,
) => {
  const { authorization } = context.req.headers;
  if (!authorization) throw new AuthenticationError('unAuthenticated');

  const accessToken = authorization.split(' ')[1];
  verifyAccessToken(accessToken);

  if (!context.verifiedUser) throw new AuthenticationError('unAuthenticated');
  return next();
};
