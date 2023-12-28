import { useRouter } from 'next/router';
import SignInForm from '@/components/organisms/SignInForm';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';
import { LoginInput, useLoginMutation } from '@/generated/graphql';

const SignInFormContainer = () => {
  const [login, { loading }] = useLoginMutation();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const router = useRouter();

  const handleSignin = async (loginInput: LoginInput) => {
    try {
      setGlobalSpinner(true);
      const res = await login({ variables: { loginInput } });

      if (res.data?.login.user) {
        const redirectTo = (router.query['redirect_to'] as string) ?? '/';

        console.log('Redirection', redirectTo);
        await router.push(redirectTo);

        return res;
      } else if (res.data?.login.errors) {
        window.alert(res.data.login.errors[0].message);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(`로그인 도중 문제가 발생했습니다.
errors:${err.message}`);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <SignInForm onSignIn={handleSignin} isLoading={loading} />;
};

export default SignInFormContainer;