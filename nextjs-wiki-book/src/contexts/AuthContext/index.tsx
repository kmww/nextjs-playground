import type { ApiContext, User } from '@/types';

interface AuthContextType {
  authUser?: User;
  isLoading: boolean;
  signin: (username: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  mutate: (
    data?: User | Promise<void>,
    shouldRevalidate?: boolean,
  ) => Promise<User | undefined>;
}

interface AuthContextProviderProps {
  context: ApiContext;
}
