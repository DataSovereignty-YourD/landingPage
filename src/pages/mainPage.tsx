import Describe1 from '../component/describe1';
import Footer from '../component/footer';
import LogoHero from '../component/utils/logoHero';

export default function MainPage() {
  return (
    <>
      <LogoHero
        text1="The easiest way to control your Data"
        subText1="yourd에 관한 요약 설명내용"
      />
      <Describe1
        text1={'Ignite Data Ownership'}
        subText1={'Take Control of Your Data Ownership'}
        text2={
          'We lead the revolutionary change in personal data ownership for you'
        }
        text3={
          'Shape the future of data ownership and join us in a more secure and person-centric digital world'
        }
      />
      <Footer />
    </>
  );
}
