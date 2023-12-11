import 'reflect-metadata';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import { buildSchema } from 'type-graphql';
import { ProductResolver } from './resolvers/Product';

async function main() {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductResolver],
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
        sserver started on => http://localhost:4000
        graphql playground => http://localhost:4000/graphql
      `);
    } else {
      console.log(`
      Production server Started...`);
    }
  });
}

main().catch((error) => console.error(error));