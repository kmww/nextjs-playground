import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { MeQuery } from '@/generated/graphql';

const localStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: `recoil-persist`,
  storage: localStorage,
});

const { persistAtom: persistProfileImageUrl } = recoilPersist({
  key: `profileImage`,
  storage: localStorage,
});

export const isLoggedInState = atom<boolean>({
  key: `isLoggedIn`,
  default: localStorage?.getItem('access_toke') ? true : false,
  effects: [persistAtom],
});

export const profileImageUrlState = atom<string | null | undefined>({
  key: `profileImageUrlstate`,
  default: '',
  effects: [persistProfileImageUrl],
});

export const userData = atom<MeQuery | undefined>({
  key: `useData`,
  default: {},
});
