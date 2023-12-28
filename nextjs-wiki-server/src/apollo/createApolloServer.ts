import { ApolloServer } from 'apollo-server-express';
import { ProductResolver } from '../resolvers/Product';
import { UserResolver } from '../resolvers/User';
import { buildSchema } from 'type-graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const createApolloServer = async (): Promise<ApolloServer> => {
  return new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductResolver, UserResolver],
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  });
};

export default createApolloServer;
