import { useForm } from 'react-hook-form';

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
};

export default SignUpForm;
