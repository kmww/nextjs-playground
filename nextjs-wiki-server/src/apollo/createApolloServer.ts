import { ApolloServer } from 'apollo-server-express';
import { ProductResolver } from '../resolvers/Product';
import { UserResolver } from '../resolvers/User';
import { buildSchema } from 'type-graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { Request, Response } from 'express';
export interface MyContext {
  req: Request;
  res: Response;
}

const createApolloServer = async (): Promise<ApolloServer> => {
  return new ApolloServer<MyContext>({
    schema: await buildSchema({
      resolvers: [ProductResolver, UserResolver],
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    context: ({ req, res }) => {
      return { req, res };
    },
  });
};

export default createApolloServer;
