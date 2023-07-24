/* eslint-disable react/no-unescaped-entities */

import { useAuth } from '@/lib/hooks/auth';
import styles from '@/styles/app.module.css';
import { useRouter } from 'next/router';

const ProtectedRoute = () => {
  const router = useRouter();
  const { loading, error, loggedIn } = useAuth();

  if (!loading && !loggedIn) {
    router.push('/login');
  }

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p>Something wrong!</p>}
      {loggedIn && (
        <>
          <h1>Protected Route</h1>
          <p>this page is protected</p>
        </>
      )}
    </div>
  );
};

export default ProtectedRoute;
