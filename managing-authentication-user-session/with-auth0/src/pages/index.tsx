/* eslint-disable react/no-unescaped-entities */
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>You're logged in with the following email: {user.email}</p>
        <Link href='/api/auth/logout'>Logout</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome!, please Login</h1>
      <Link href='api/auth/login'>Login</Link>
    </div>
  );
};

export default Home;
