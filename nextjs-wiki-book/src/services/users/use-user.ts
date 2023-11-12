import useSWR from 'swr';
import { ApiContext, User } from '@/types';

export interface UseUserProps {
  id: number;
  initial?: User;
}

export interface UseUser {
  user?: User;
  isLoading: boolean;
  isError: boolean;
}

const useUser = (
  context: ApiContext,
  { id, initial }: UseUserProps,
): UseUser => {
  const { data, error } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
  );

  return {
    user: data ?? initial,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useUser;
