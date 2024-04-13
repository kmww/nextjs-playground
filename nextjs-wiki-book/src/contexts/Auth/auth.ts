import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { MeQuery } from '@/generated/graphql';

const localStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: localStorage?.getItem('access_toke') ? true : false,
  effects: [persistAtom],
});

export const profileImageUrlState = atom({
  key: 'profileImageUrlstate',
  default: '',
});

export const userData = atom<MeQuery>({
  key: 'useData',
  default: {
    me: {
      createdAt: '',
      description: '',
      displayName: '',
      email: '',
      id: 0,
      profileImageUrl: '',
      updatedAt: '',
      username: '',
    },
  },
});
