import { FormEvent, SetStateAction, useState } from 'react';
import styles from '@/styles/app.module.css';
import { useRouter } from 'next/router';

const handleLogin = async (email: string, password: string) => {
  const resp = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

const LoginPage = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = e.currentTarget;
    console.dir(email.value);
    setLoginError(null);
    handleLogin(email.value, password.value)
      .then(() => router.push('/protected-route'))
      .catch((error: { message: SetStateAction<string | null> }) =>
        setLoginError(error.message)
      );
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.authform} onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />

        <button type='submit'>Login</button>

        {loginError && <div className={styles.authformError}>{loginError}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
