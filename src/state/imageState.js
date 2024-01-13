// src/state/imageState.js
import { atom, selector } from 'recoil';

// 이미지 URL을 저장하는 atom
export const imageUrlState = atom({
  key: 'imageUrlState', // 고유한 키
  default: '', // 기본값은 빈 문자열 또는 초기 이미지 URL
});

// 이미지를 미리 로드하는 selector
export const preloadedImageState = selector({
  key: 'preloadedImageState',
  get: async ({ get }) => {
    const imageUrl = get(imageUrlState);
    if (!imageUrl) return null;

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(imageUrl);
      img.onerror = reject;
      img.src = imageUrl;
    });
  },
});
