import { ApolloServer } from 'apollo-server-express';
import { ProductResolver } from '../resolvers/Product';
import { UserResolver } from '../resolvers/User';
import { buildSchema } from 'type-graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { Request, Response } from 'express';
import {
  JwtVerifiedUser,
  verifyAccessTokenFromReqHeaders,
} from '../utils/jwt-auth';
export interface MyContext {
  req: Request;
  res: Response;
  verifiedUser: JwtVerifiedUser;
}

const createApolloServer = async (): Promise<ApolloServer> => {
  return new ApolloServer<MyContext>({
    schema: await buildSchema({
      resolvers: [ProductResolver, UserResolver],
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    context: ({ req, res }) => {
      const verified = verifyAccessTokenFromReqHeaders(req.headers);
      return { req, res, verifiedUser: verified };
    },
  });
};

export default createApolloServer;
