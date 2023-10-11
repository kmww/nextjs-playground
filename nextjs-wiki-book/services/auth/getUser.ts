import { ApiContext } from '@/types/api';
import { User } from '@/types/auth';
import { fetcher } from '@/utils';

export interface GetUserparams {
  id: number;
}

const getUser = async (
  context: ApiContext,
  { id }: GetUserparams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};

export default getUser;
