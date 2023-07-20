/* eslint-disable react/no-unescaped-entities */

import styles from '@/styles/app.module.css';

const ProtectedRoute = () => {
  return (
    <div className={styles.container}>
      <h1>Protected Route</h1>
      <p>You can't see me if not logged-in!</p>
    </div>
  );
};

export default ProtectedRoute;
