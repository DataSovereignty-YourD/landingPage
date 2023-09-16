import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { COMMON_LANG_TYPE } from '../modules/action/actionTypes';

const AppHeader = () => {
  const { t, i18n } = useTranslation(['page']);
  const dispatch = useDispatch(); // useDispatch 추가
  const langInfo = useSelector((state) => state.common.Common_Lang_Type);

  const onChangeLang = () => {
    if (langInfo === 'ko') {
      dispatch({ type: COMMON_LANG_TYPE, Common_Lang_Type: 'en' });
    } else if (langInfo === 'en') {
      dispatch({ type: COMMON_LANG_TYPE, Common_Lang_Type: 'ko' });
    }
  };

  useEffect(() => {
    if (langInfo === undefined) {
      dispatch({ type: COMMON_LANG_TYPE, Common_Lang_Type: 'ko' });
    } else {
      i18n.changeLanguage(langInfo);
    }
  }, [langInfo]);

  return (
    <>
      <Link to="/auth/login">{t('로그인')}</Link>
      <Link to="#" className="lang" onClick={onChangeLang}>
        {langInfo === 'ko' ? 'KR' : 'EN'}
      </Link>
    </>
  );
};

export default AppHeader;
