import { atom } from 'recoil';
import { MeQuery } from '@/generated/graphql';

export const userData = atom<MeQuery | undefined>({
  key: `useData`,
  default: {},
});
