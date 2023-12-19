import { FormControl, FormLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';

interface SignUpFormData {
  email: string;
  username: string;
  password: string;
  displayName: string;
}

interface SignUpFormProps {
  onSignUp?: (
    email: string,
    username: string,
    password: string,
    displayName: string,
  ) => void;
}

const SignUpForm = ({ onSignUp }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    const { email, username, password, displayName } = data;

    onSignUp && onSignUp(email, username, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ paddingBottom: 1 }}>
        <FormLabel sx={{ fontWeight: 'bold' }}>이메일</FormLabel>
        <Input
          {...register('email', { required: true })}
          name="email"
          type="text"
          placeholder="example@example.com"
          hasError={!!errors.email}
        />
        {errors.email && (
          <Text color="danger" variant="small" paddingLeft={1}>
            이메일을 입력해주세요
          </Text>
        )}
      </FormControl>
      <FormControl fullWidth sx={{ paddingBottom: 1 }}>
        <FormLabel sx={{ fontWeight: 'bold' }}>비밀번호</FormLabel>
        <Input
          {...register('password', { required: true })}
          name="password"
          type="password"
          placeholder="8자 이상의 영문,숫자,특문"
          hasError={!!errors.password}
        />
        {errors.password && (
          <Text color="danger" variant="small" paddingLeft={1}>
            비밀번호를 입력해주세요
          </Text>
        )}
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 1 }}>
        <FormLabel sx={{ fontWeight: 'bold' }}>이름</FormLabel>
        <Input
          {...register('username', { required: true })}
          name="username"
          type="text"
          placeholder="홍길동"
          hasError={!!errors.username}
        />
        {errors.username && (
          <Text color="danger" variant="small" paddingLeft={1}>
            실명을 입력해주세요
          </Text>
        )}
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <FormLabel sx={{ fontWeight: 'bold' }}>닉네임</FormLabel>
        <Input
          {...register('displayName', { required: true })}
          name="displayName"
          type="text"
          placeholder="닉네임"
          hasError={!!errors.displayName}
        />
        {errors.displayName && (
          <Text color="danger" variant="small" paddingLeft={1}>
            닉네임을 입력해주세요
          </Text>
        )}
      </FormControl>
      <Button width="100%" type="submit">
        회원가입
      </Button>
    </form>
  );
};

export default SignUpForm;
