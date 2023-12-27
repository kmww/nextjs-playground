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
const SignInForm = ({ onSignIn, isLoading }: SigninFormProps) => {
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
      <Box marginBottom={1}>
        <Input
          {...register('loginInput.emailOrDisplayName', {
            required: '이메일 또는 닉네임을 입력해주세요.',
          })}
          name="loginInput.emailOrDisplayName"
          type="text"
          placeholder="이메일 또는 닉네임"
          hasError={!!errors.loginInput?.emailOrDisplayName}
        />
        {errors.loginInput?.emailOrDisplayName && (
          <Text color="danger" variant="small" paddingLeft={1}>
            {errors.loginInput.emailOrDisplayName.message}
          </Text>
        )}
      </Box>
      <Box marginBottom={2}>
        <Input
          {...register('loginInput.password', {
            required: '비밀번호를 입력해주세요.',
          })}
          name="loginInput.password"
          type="password"
          placeholder="********"
          hasError={!!errors.loginInput?.password}
        />
        {errors.loginInput?.password && (
          <Text color="danger" variant="small" paddingLeft={1}>
            {errors.loginInput.password.message}
          </Text>
        )}
      </Box>
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

export default SignInForm;
