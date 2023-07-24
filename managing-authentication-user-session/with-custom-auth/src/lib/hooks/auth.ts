import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/get-session')
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setLoggedIn(true);
          setUser(data.user);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    user,
    loggedIn,
    loading,
    error,
  };
};
