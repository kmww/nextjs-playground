import { useAuthContext } from '@/contexts/AuthContext';
import { useGlobalSpinnerActionsContext } from '@/contexts/GlobalSpinnerContext';

interface SigninFormContainerProps {
  onSingin: (error?: Error) => void;
}

const SigninFormContainer = ({ onSingin }: SigninFormContainerProps) => {
  const { signin } = useAuthContext();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();

  const handleSignin = async (username: string, password: string) => {
    try {
      setGlobalSpinner(true);
      await signin(username, password);
      onSingin && onSingin();
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message);
        onSingin && onSingin(err);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };
};

export default SigninFormContainer;
