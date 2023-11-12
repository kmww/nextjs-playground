import { User } from '@/types';

export interface UseUserProps {
  id: number;
  initial?: User;
}

export interface UseUser {
  user?: User;
  isLoading: boolean;
  isError: boolean;
}
