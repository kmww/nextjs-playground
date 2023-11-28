import { useAuthContext } from '@/contexts/AuthContext';
import { useAuthGuard } from '@/utils/hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const SellPage: NextPage = () => {
  const router = useRouter();
  const { authUser } = useAuthContext();

  const handleSave = (error?: Error) => {
    if (authUser && !error) {
      router.push(`/users/${authUser.id}`);
    }
  };

  useAuthGuard();
};

export default SellPage;
