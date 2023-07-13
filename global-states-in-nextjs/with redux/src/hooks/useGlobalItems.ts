import { RootState } from '@/modules';
import { shallowEqual, useSelector } from 'react-redux';

export const useGlobalItems = (): Record<string, any> => {
  return useSelector((state: RootState) => state, shallowEqual);
};
