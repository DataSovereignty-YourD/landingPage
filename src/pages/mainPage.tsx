import Describe1 from "../component/describe1";
import Footer from "../component/footer";
import LogoHero from "../component/utils/logoHero";
import BlogCard from "../component/blogCard";
import MainDetail from "../component/mainDetail";
import ScrollCircle from "../component/scrollCircle";
export default function MainPage() {
  return (
    <>
      <Describe1
        title1={"Ignite"}
        title2={"Data Ownership"}
        subText1={"Take Control of Your Data Ownership"}
        text1={
          "YourD was created to tackle the challenges of data sovereignty and privacy in the modern web"
        }
        text2={
          "We fundamentally address data sovereignty with a novel authentication protocol and infrastructure"
        }
      />

      <MainDetail />
      <BlogCard />
      <LogoHero
        text1="The easiest way to control your Data"
        subText1="yourd에 관한 요약 설명내용"
      />

      <Footer />
    </>
  );
}
