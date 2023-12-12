import Apollo from '@apollo/client';
import { client } from './apollo-client';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetcher = async (
  queryDocument: Apollo.DocumentNode,
): Promise<any> => {
  const { data, error } = await client.query({
    query: queryDocument,
  });

  if (error) {
    console.error(`
    API 요청 중에 에러가 발생했습니다.
    Error Message: ${error.message}`);
  }

  return data;
};
