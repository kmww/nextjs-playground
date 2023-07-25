import { GraphQLClient } from 'graphql-request';

const { GRAPHCMS_ENDPOINT= '', GRAPHCMS_API_KEY = null } = process.env;
const authorization = `Bearer ${GRAPHCMS_API_KEY}`;

const GraphqlClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    ...(GRAPHCMS_API_KEY && { authorization }),
  },
});

export default GraphqlClient;
