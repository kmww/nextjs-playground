import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import { LoginInput, LoginMutationVariables } from '@/generated/graphql';

interface SigninFormProps {
  onSignIn: (signInInput: LoginInput) => Promise<void>;
  isLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SigninForm = ({ onSignIn, isLoading }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginMutationVariables>();

  const onSubmit = (formData: LoginMutationVariables) => {
    const { loginInput } = formData;

    console.log(loginInput);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Button
          width="100%"
          type="submit"
          marginBottom={1}
          disabled={isLoading}
        >
          로그인
        </Button>
        <Link href="/signup">
          <Button width="100%" variant="secondary">
            회원가입
          </Button>
        </Link>
      </Box>
    </form>
  );
};

export default SigninForm;
