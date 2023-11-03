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
};

export default SigninForm;
