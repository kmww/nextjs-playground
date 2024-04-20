import uuid from 'react-uuid';
import { atom } from 'recoil';

export const globalSpinner = atom<boolean>({
  key: `isGlobalSpinnerOn/${uuid()}`,
  default: false,
});
