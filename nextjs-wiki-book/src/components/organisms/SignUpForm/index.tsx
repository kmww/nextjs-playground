/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import { SignUpMutationVariables } from '@/generated/graphql';

interface SignUpFormProps {
  onSignUp: ({ variables }: any) => void;
}

const SignUpForm = ({ onSignUp }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpMutationVariables>();

  const onSubmit = async (formData: SignUpMutationVariables) => {
    const { signUpInput } = formData;

    onSignUp({ variables: { signUpInput } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box paddingBottom={1}>
        <FormLabel sx={{ fontWeight: 'bold' }}>이메일</FormLabel>
        <Input
          {...register('signUpInput.email', { required: true })}
          name="signUpInput.email"
          type="email"
          placeholder="example@example.com"
          hasError={!!errors.signUpInput?.email}
        />
        {errors.signUpInput?.email?.message && (
          <Text color="danger" variant="small" paddingLeft={1}>
            이메일을 입력해주세요
          </Text>
        )}
      </Box>
      <Box paddingBottom={1}>
        <FormLabel sx={{ fontWeight: 'bold' }}>비밀번호</FormLabel>
        <Input
          {...register('signUpInput.password', { required: true })}
          name="signUpInput.password"
          type="password"
          placeholder="8자 이상의 영문,숫자,특문"
          hasError={!!errors.signUpInput?.password}
        />
        {errors.signUpInput?.password && (
          <Text color="danger" variant="small" paddingLeft={1}>
            비밀번호를 입력해주세요
          </Text>
        )}
      </Box>
      <Box marginBottom={1}>
        <FormLabel sx={{ fontWeight: 'bold' }}>이름</FormLabel>
        <Input
          {...register('signUpInput.username', { required: true })}
          name="signUpInput.username"
          type="text"
          placeholder="홍길동"
          hasError={!!errors.signUpInput?.username}
        />
        {errors.signUpInput?.username && (
          <Text color="danger" variant="small" paddingLeft={1}>
            실명을 입력해주세요
          </Text>
        )}
      </Box>
      <Box marginBottom={2}>
        <FormLabel sx={{ fontWeight: 'bold' }}>닉네임</FormLabel>
        <Input
          {...register('signUpInput.displayName', { required: true })}
          name="signUpInput.displayName"
          type="text"
          placeholder="닉네임"
          hasError={!!errors.signUpInput?.displayName}
        />
        {errors.signUpInput?.displayName && (
          <Text color="danger" variant="small" paddingLeft={1}>
            닉네임을 입력해주세요
          </Text>
        )}
      </Box>
      <Button width="100%" type="submit">
        회원가입
      </Button>
    </form>
  );
};

export default SignUpForm;
