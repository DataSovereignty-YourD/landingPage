// src/state/imageState.js
import { atom, selector } from 'recoil';

// 이미지 URL을 저장하는 atom
export const imageUrlState = atom({
  key: 'imageUrlState', // 고유한 키
  default: '', // 기본값은 빈 문자열 또는 초기 이미지 URL
});
