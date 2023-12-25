import { FormLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import { SignUpInput, SignUpMutationVariables } from '@/generated/graphql';

interface SignUpFormProps {
  onSignUp: (signUpInput: SignUpInput) => Promise<void>;
  isLoading: boolean;
}

const SignUpForm = ({ onSignUp, isLoading }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpMutationVariables>();

  const onSubmit = (formData: SignUpMutationVariables) => {
    const { signUpInput } = formData;

    onSignUp(signUpInput);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box paddingBottom={1}>
        <FormLabel sx={{ fontWeight: 'bold' }}>이메일</FormLabel>
        <Input
          {...register('signUpInput.email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
              message: '이메일의 형식이 올바르지 않습니다.',
            },
          })}
          name="signUpInput.email"
          type="text"
          placeholder="example@example.com"
          hasError={!!errors.signUpInput?.email}
        />
        {errors.signUpInput?.email && (
          <Text color="danger" variant="small" paddingLeft={1}>
            {errors.signUpInput.email.message}
          </Text>
        )}
      </Box>
      <Box paddingBottom={1}>
        <FormLabel sx={{ fontWeight: 'bold' }}>비밀번호</FormLabel>
        <Input
          {...register('signUpInput.password', {
            required: '비밀번호를 입력해주세요',
            min: { value: 8, message: '비밀번호는 8자 이상이어야 합니다.' },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/,
              message: '영문,숫자를 포함한 8자 이상이어야 합니다.',
            },
          })}
          name="signUpInput.password"
          type="password"
          placeholder="8자 이상의 영문,숫자"
          hasError={!!errors.signUpInput?.password}
        />
        {errors.signUpInput?.password && (
          <Text color="danger" variant="small" paddingLeft={1}>
            {errors.signUpInput.password.message}
          </Text>
        )}
      </Box>
      <Box marginBottom={1}>
        <FormLabel sx={{ fontWeight: 'bold' }}>이름</FormLabel>
        <Input
          {...register('signUpInput.username', {
            required: '성함을 입력해주세요',
            pattern: {
              value: /^[가-힣]{2,4}$/,
              message: '특수한 경우 고객센터에 문의해주세요.',
            },
          })}
          name="signUpInput.username"
          type="text"
          placeholder="홍길동"
          hasError={!!errors.signUpInput?.username}
        />
        {errors.signUpInput?.username && (
          <Text color="danger" variant="small" paddingLeft={1}>
            {errors.signUpInput.username.message}
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
      <Button width="100%" type="submit" disabled={isLoading}>
        회원가입
      </Button>
    </form>
  );
};

export default SignUpForm;
