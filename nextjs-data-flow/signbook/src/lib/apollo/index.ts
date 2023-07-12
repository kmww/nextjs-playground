import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloCache, NormalizedCacheObject } from '@apollo/client/cache';

let uri = '/api/graphql';
let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  });
};

const initApollo = (
  initialState: ApolloCache<NormalizedCacheObject> | null = null
) => {
  const client = apolloClient || createApolloClient();

  if (initialState) {
    client.cache.restore({
      ...client.extract(),
      ...initialState,
    });
  }

  if (typeof window === 'undefined') {
    return client;
  }

  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
};

export default initApollo;
