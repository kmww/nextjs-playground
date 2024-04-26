import { ApolloServer } from 'apollo-server-express';
import { ProductResolver } from '../resolvers/Product';
import { UserResolver } from '../resolvers/User';
import { ShoppingCartResolver } from '../resolvers/Cart';
import { buildSchema } from 'type-graphql';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { Request, Response } from 'express';
import {
  JwtVerifiedUser,
  verifyAccessTokenFromReqHeaders,
} from '../utils/jwt-auth';
import redis from '../redis/redis-client';
export interface MyContext {
  req: Request;
  res: Response;
  verifiedUser: JwtVerifiedUser;
  redis: typeof redis;
}

const createApolloServer = async (): Promise<ApolloServer> => {
  return new ApolloServer<MyContext>({
    schema: await buildSchema({
      resolvers: [ProductResolver, UserResolver, ShoppingCartResolver],
      validate: { forbidUnknownValues: false },
    }),
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageGraphQLPlayground()
        : ApolloServerPluginLandingPageLocalDefault(),
    ],
    context: ({ req, res }) => {
      const verified = verifyAccessTokenFromReqHeaders(req.headers);
      return { req, res, verifiedUser: verified, redis };
    },
  });
};

export default createApolloServer;
