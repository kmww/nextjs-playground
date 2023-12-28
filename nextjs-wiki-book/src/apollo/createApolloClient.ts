import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createApolloCache } from './createApolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: createApolloCache(),
  });

  return apolloClient;
};

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: -> ${operation.operationName}
Message: ${message}, Query: ${path}, Location: ${JSON.stringify(locations)}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[networkError]: -> ${operation.operationName}
Message: ${networkError.message}`);
  }
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});
