import { atom } from 'recoil';

/**
 * Toast State
 * @param {boolean} isToastOn - 토스트를 보여줄지 여부
 * @param {string} content - 토스트 내용
 * @param {string}  variant - 토스트 상태
 * @default - [false, '내용을 입력하세요', 'primary']
 */
export const globalToast = atom<[boolean, ...string[]]>({
  key: 'isGlobalToastOn',
  default: [false, '내용을 입력하세요', 'primary'],
});
