import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
  from,
  fromPromise,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { refreshAccessToekn } from './auth';
import { createApolloCache } from './createApolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  apolloClient = new ApolloClient({
    cache: createApolloCache(),
    link: from([authLink, errorLink, httpLink]),
  });

  return apolloClient;
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      if (
        graphQLErrors.find((error) => error.message === 'access token expired')
      ) {
        return fromPromise(refreshAccessToekn(apolloClient, operation))
          .filter((result) => !!result)
          .flatMap(() => forward(operation));
      }

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
  },
);

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const authLink = setContext((request, prevContext) => {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      ...prevContext.headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});
