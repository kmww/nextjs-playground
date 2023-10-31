import type { ApiContext, User } from '@/types';
import React, { useContext } from 'react';

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

const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
});

export const useAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(AuthContext);
