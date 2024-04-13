import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import SignUpForm from '@/components/organisms/SignUpForm';
import { globalSpinner } from '@/contexts/GlobalSpinner/globalSpinner';
import { SignUpInput, useSignUpMutation } from '@/generated/graphql';

const SignUpFormContainer = () => {
  const [signup, { loading }] = useSignUpMutation();
  const setGlobalSpinner = useSetRecoilState(globalSpinner);
  const router = useRouter();

  const handleSubmit = async (signUpInput: SignUpInput) => {
    try {
      setGlobalSpinner(true);
      const res = await signup({ variables: { signUpInput } });
      if (res.data?.signUp) {
        await router.replace('/');
        window.alert('회원가입이 완료되었습니다.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        window.alert(`회원가입 도중 문제가 발생했습니다.
error: ${error?.message}`);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <SignUpForm onSignUp={handleSubmit} isLoading={loading} />;
};

export default SignUpFormContainer;
