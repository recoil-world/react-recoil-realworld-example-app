import { atom } from 'recoil';

export const requestIdState = atom({
  key: 'requestId',
  default: 0,
});
