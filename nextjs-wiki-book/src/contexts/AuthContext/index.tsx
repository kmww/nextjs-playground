// import React, { useContext } from 'react';
// import useSWR from 'swr';
// import signin from '@/services/auth/signin';
// import signout from '@/services/auth/signout';
// import type { ApiContext, User } from '@/types';

import React, { useContext } from 'react';
import { useLoginMutation, useLogoutMutation } from '@/generated/graphql';
import { User } from '@/types';

// interface AuthContextType {
//   authUser?: User;
//   isLoading: boolean;
//   signin: (username: string, password: string) => Promise<void>;
//   signout: () => Promise<void>;
//   mutate: (
//     data?: User | Promise<User>,
//     shouldRevalidate?: boolean,
//   ) => Promise<User | undefined>;
// }

// interface AuthContextProviderProps {
//   context: ApiContext;
//   authUser?: User;
// }

// const AuthContext = React.createContext<AuthContextType>({
//   authUser: undefined,
//   isLoading: false,
//   signin: async () => Promise.resolve(),
//   signout: async () => Promise.resolve(),
//   mutate: async () => Promise.resolve(undefined),
// });

// export const useAuthContext = (): AuthContextType =>
//   useContext<AuthContextType>(AuthContext);

// export const AuthContextProvider = ({
//   context,
//   authUser,
//   children,
// }: React.PropsWithChildren<AuthContextProviderProps>) => {
//   const { data, error, mutate } = useSWR<User>(
//     `${context.apiRootUrl.replace(/\/$/g, '')}/users/me`,
//   );
//   const isLoading = !data && !error;

//   const signinInternal = async (username: string, password: string) => {
//     await signin(context, { username, password });
//     await mutate();
//   };

//   const signoutInternal = async () => {
//     await signout(context);
//     await mutate();
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         authUser: data ?? authUser,
//         isLoading,
//         signin: signinInternal,
//         signout: signoutInternal,
//         mutate,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

interface AuthContextType {
  authUser?: User;
  isLoading: boolean;
  signin: (username: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
}

interface AuthContextProviderProps {
  authUser?: User;
}

const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
});

export const useAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(AuthContext);

export const AuthContextProvider = ({
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  const [loginMutation, { loading: loginLoading }] = useLoginMutation();
  const [logoutMutation, { loading: logoutLoading }] = useLogoutMutation();
  const isLoading = loginLoading || logoutLoading;

  const signinInternal = async (
    emailOrDisplayName: string,
    password: string,
  ) => {
    await loginMutation({
      variables: {
        loginInput: { emailOrDisplayName, password },
      },
    });
  };

  const signoutInternal = async () => {
    await logoutMutation();
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isLoading,
        signin: signinInternal,
        signout: signoutInternal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
