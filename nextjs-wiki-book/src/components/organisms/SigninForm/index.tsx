import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import { useForm } from 'react-hook-form';

export interface SigninFormData {
  username: string;
  password: string;
}

interface SigninFormProps {
  onSingin?: (username: string, password: string) => void;
}

const SigninForm = ({ onSingin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data;

    onSingin && onSingin(username, password);
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
    </form>
  );
};

export default SigninForm;
