import { NextPage } from 'next';
import { useRouter } from 'next/router';

const SigninPage: NextPage = () => {
  const router = useRouter();

  const handleSignin = async (err?: Error) => {
    if (!err) {
      const redirectTo = (router.query['redirect_to'] as string) ?? '/';

      console.log('Redirection', redirectTo);
      await router.push(redirectTo);
    }
  };

  return <></>;
};

export default SigninPage;
