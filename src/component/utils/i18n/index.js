import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend"; // 현재 사용하지 않으므로 주석 처리

import en from './locales/en-US'; // 경로 수정
import ko from './locales/ko-KR'; // 경로 유지
import cn from './locales/zh-CN'; // 경로 수정

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
        ko,
        en,
        zh
    },
    fallbackLng: "en",
    detection: {
      order: ['querystring', 'htmlTag', 'cookie'],
      lookupQueryString: 'lang',
      lookupCookie: 'i18n_lang'
    },
    debug: true,
    saveMissing: true,
    interpolation: {
      escapeValue: false  
    }
  }, function(err) {
    if(err) console.error(err);
  });
 
export default i18n;
