import { atom } from 'recoil';

export const globalSpinner = atom<boolean>({
  key: 'isGlobalSpinnerOn',
  default: false,
});
