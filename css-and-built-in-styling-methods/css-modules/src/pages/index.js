import styles from '@/styles/Home.module.css';

const Home = () => {
  return (
    <div className={`${styles.homepage} ${styles['homepage-red']}`}>
      <h1 className={styles.title}> CSS Modules example </h1>
    </div>
  );
};

export default Home;
