import Describe from '../component/describe';
import Footer from '../component/footer';
import LogoHero from '../component/utils/logoHero';
import OppoScroll from '../component/utils/oppoScroll';
import ChangeLang from '../component/chageLang';
import useMultipleTranslations from '../hooks/useMultileTranslations';
export default function MainPage() {
  const translationKeys = [
    'Ignite Data Ownership',
    'Take Control of Your Data Ownership',
    'We lead the revolutionary change in personal data ownership for you',
    'Shape the future of data ownership and join us in a more secure and person-centric digital world',
    'Based on data ownership, Fast Auth enables quick QR logins without sharing personal information with corporations',
    'Establishing data ownership allows you to control and buy and sell data yourself',
    'With high-level security technology, it securely protects personal information, enabling you to use it with peace of mind for various purposes',
  ];
  const translations = useMultipleTranslations(translationKeys);
  return (
    <>
      <Describe
        text1={translations[0]} // 번역된 텍스트를 사용합니다.
        subText1={translations[1]} // 번역된 텍스트를 사용합니다.
        text2={translations[2]} // 번역된 텍스트를 사용합니다.
        text3={translations[3]} // 번역된 텍스트를 사용합니다.
      />
      <OppoScroll />
      <LogoHero
        text1="The easiest way to scale your analytics"
        subText1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore vitae minus dolorum."
      />
      <Footer />
    </>
  );
}
