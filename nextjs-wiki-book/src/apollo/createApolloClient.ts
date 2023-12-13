import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createApolloCache } from './createApolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: createApolloCache(),
  });

  return apolloClient;
};
