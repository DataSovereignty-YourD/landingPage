
import Describe1 from "../components/main/describe1";
import Footer from "../components/common/footer";
import LogoHero from "../components/main/logoHero";
import BlogCard from "../components/main/blogCard";
import GlobalStandard from "../components/main/globalStandard";
import { useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import WhyYourD from '../components/main/whyYourD';
import YourdStack from "../components/main/yourdStack";
import ProductPage from "./productPage";

import Solution from "../components/business/solution";


export default function MainPage() {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      controls.set({ scaleX: value });
    });

    // 컴포넌트가 언마운트되면 구독을 취소합니다.
    return () => unsubscribe();
  }, [controls, scrollYProgress]);

  return (
    <div className="w-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 w-screen bg-[#fccc00] origin-left z-50"
        animate={controls}
      ></motion.div>
      <Describe1
        title1={'Ignite'}
        title2={'Data Ownership'}
        subText1={
          'We provide a user-friendly Web3.0 infrastructure enabling you to easily build Web3.0 products. '
        }
        />
      <YourdStack />
      <Solution/>
      {/* <DetailProductPage /> */}
      {/* <Persona /> */}
      <WhyYourD/>
      <GlobalStandard />
      {/* <BlogCard /> */}


      <LogoHero text1="The easiest way to control your Data" />
      <Footer />
      {/* <ScrollProgressBar/> */}
    </div>
  );
}
