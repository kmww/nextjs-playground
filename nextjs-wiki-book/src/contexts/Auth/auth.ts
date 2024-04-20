import uuid from 'react-uuid';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { MeQuery } from '@/generated/graphql';

const localStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: `recoil-persist/${uuid()}`,
  storage: localStorage,
});

const { persistAtom: persistProfileImageUrl } = recoilPersist({
  key: `profileImage/${uuid()}`,
  storage: localStorage,
});

export const isLoggedInState = atom<boolean>({
  key: `isLoggedIn/${uuid()}`,
  default: localStorage?.getItem('access_toke') ? true : false,
  effects: [persistAtom],
});

export const profileImageUrlState = atom<string | null | undefined>({
  key: `profileImageUrlstate/${uuid()}`,
  default: '',
  effects: [persistProfileImageUrl],
});

export const userData = atom<MeQuery | undefined>({
  key: `useData/${uuid()}`,
  default: {},
});
