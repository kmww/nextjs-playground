import { InMemoryCache } from '@apollo/client';

export const createApolloCache = (): InMemoryCache => {
  return new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          films: {
            keyArgs: false,
          },
        },
      },
    },
  });
};
