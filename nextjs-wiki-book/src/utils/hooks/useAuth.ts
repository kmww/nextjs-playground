import { useEffect, useMemo, useState } from 'react';
import { useMeQuery } from '@/generated/graphql';

export const UseAuth = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const { data, error, refetch } = useMeQuery({ skip: !accessToken });
  const isLoggedIn = useMemo(() => {
    if (accessToken) return data?.me?.id;
    else false;
  }, [accessToken, data?.me?.id]);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      const token = localStorage.getItem('access_token');
      setAccessToken(token !== null ? token : undefined);
    }
  }, [data]);

  useEffect(() => {
    if (accessToken) {
      refetch();
    }
  }, [accessToken, refetch]);

  return {
    accessToken,
    data,
    isLoggedIn,
    error,
  };
};
