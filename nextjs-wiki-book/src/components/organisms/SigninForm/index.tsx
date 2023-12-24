import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';

export interface SigninFormData {
  username: string;
  password: string;
}

interface SigninFormProps {
  onSignin?: (username: string, password: string) => void;
}

const SigninForm = ({ onSignin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data;

    onSignin && onSignin(username, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={1}>
        <Input
          {...register('username', { required: true })}
          name="username"
          type="text"
          placeholder="사용자명"
          hasError={!!errors.username}
        />
        {errors.username && (
          <Text color="danger" variant="small" paddingLeft={1}>
            사용자명을 입력해주세요
          </Text>
        )}
      </Box>
      <Box marginBottom={2}>
        <Input
          {...register('password', { required: true })}
          name="password"
          type="password"
          placeholder="비밀번호"
          hasError={!!errors.password}
        />
        {errors.password && (
          <Text color="danger" variant="small" paddingLeft={1}>
            비밀번호를 입력해주세요
          </Text>
        )}
      </Box>
      <Box>
        <Button width="100%" type="submit" marginBottom={1}>
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
