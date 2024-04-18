import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import SignInForm from '@/components/organisms/SignInForm';
import { isLoggedInState } from '@/contexts/Auth/auth';
import { globalSpinner } from '@/contexts/GlobalSpinner/globalSpinner';
import { globalToast } from '@/contexts/GlobalToast/globalToast';
import { LoginInput, useLoginMutation } from '@/generated/graphql';

const SignInFormContainer = () => {
  const [login, { loading }] = useLoginMutation();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setGlobalSpinner = useSetRecoilState(globalSpinner);
  const setToast = useSetRecoilState(globalToast);

  const router = useRouter();
  const handleSignin = async (loginInput: LoginInput) => {
    try {
      setGlobalSpinner(true);
      const res = await login({ variables: { loginInput } });

      if (res.data?.login.user) {
        const redirectTo = (router.query['redirect_to'] as string) ?? '/';
        setIsLoggedIn(true);
        setToast([true, '로그인이 완료되었습니다.', 'primary']);
        router.push(redirectTo);

        return res;
      } else if (res.data?.login.errors) {
        setToast([true, res.data.login.errors[0].message, 'danger']);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setToast([true, '로그인 도중 문제가 발생했습니다.', 'danger']);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <SignInForm onSignIn={handleSignin} isLoading={loading} />;
};

export default SignInFormContainer;
