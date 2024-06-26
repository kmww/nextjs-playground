import { graphqlUploadExpress } from 'graphql-upload';
import 'reflect-metadata';
import express from 'express';
import http from 'http';
import { createDB } from './db/db-client';
import createApolloServer from './apollo/createApolloServer';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

async function main() {
  await createDB();
  const app = express();
  app.use(cors());
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(graphqlUploadExpress({ maxFileSize: 1024 * 1000 * 5, maxFiles: 1 }));
  // healthcheck
  app.get('/', (_, res) => {
    res.status(200).send();
  });

  const apolloServer = await createApolloServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: [
        'http://localhost:3000',
        'https://studio.apollographql.com',
        'https://loa-wiki.vercel.app',
      ],
      credentials: true,
    },
  });

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
        sserver started on => http://localhost:4000
        graphql playground => http://localhost:4000/graphql
      `);
    } else {
      console.log(`Production server Started...`);
    }
  });
}

main().catch((error) => console.error(error));
