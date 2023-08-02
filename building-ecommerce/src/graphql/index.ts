import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
const GRAPHCMS_API_KEY = process.env.GRAPHCMS_API_KEY;
const authorization = `Bearer ${GRAPHCMS_API_KEY}`;

const GraphqlClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    ...(GRAPHCMS_API_KEY && { authorization }),
  },
});

export default GraphqlClient;
