import { ApiContext, User } from '@/types';

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
};

interface UserProfileContainerProps {
  userId: number;
  user?: User;
}