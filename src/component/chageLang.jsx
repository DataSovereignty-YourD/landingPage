import { useTranslation } from 'react-i18next';

function ChangeLang() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        style={{
          marginRight: '10px',
          backgroundColor: i18n.language === 'en' ? 'gray' : 'white',
        }}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        style={{
          marginRight: '10px',
          backgroundColor: i18n.language === 'ko' ? 'gray' : 'white',
        }}
        onClick={() => changeLanguage('ko')}
      >
        Korean
      </button>
      <button
        style={{ backgroundColor: i18n.language === 'zh' ? 'gray' : 'white' }}
        onClick={() => changeLanguage('zh')}
      >
        Chinese
      </button>
    </div>
  );
}

export default ChangeLang;
