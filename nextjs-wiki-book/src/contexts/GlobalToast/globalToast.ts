import { atom } from 'recoil';

export const globalToast = atom<[boolean, string]>({
  key: 'isGlobalToastOn',
  default: [false, ''],
});
