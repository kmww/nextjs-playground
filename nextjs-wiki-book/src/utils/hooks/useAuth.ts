import { useEffect, useState } from 'react';
import { useMeQuery } from '@/generated/graphql';

export const UseAuth = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const { data, error, loading, refetch } = useMeQuery({ skip: !accessToken });

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
    error,
    loading,
  };
};
