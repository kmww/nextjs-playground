import styles from '@/styles/app.module.css';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>homepage</h1>
      <button onClick={() => router.push('/login')}>Login</button>
    </div>
  );
};

export default Home;
