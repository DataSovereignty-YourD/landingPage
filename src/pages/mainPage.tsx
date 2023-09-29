
import Describe1 from "../components/describe1";
import Footer from "../components/footer";
import LogoHero from "../components/utils/logoHero";
import BlogCard from "../components/blogCard";
import MainDetail from "../components/mainDetail";
import GlobalStandard from "./globalStandard";
import { useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import React from "react";

import Prove from '../components/prove';
import Own from '../components/own';
import Apply from '../components/apply';

import WhyYourD from '../components/whyYourD';
import YourdStack from "../components/yourdStack";
import ProductPage from "./productPage";

import Persona from "../components/persona";
import DetailProductPage from "../components/detailProductPage";


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
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 w-screen bg-[#fccc00] origin-left z-50"
        animate={controls}
      ></motion.div>
      <Describe1
        title1={'Ignite'}
        title2={'Data Ownership'}
        subText1={
          'We provide a user-friendly Web3 infrastructure enabling you to easily build Web3 products. '
        }

/>
      <YourdStack />
      <DetailProductPage />
      <Persona />

      {/* <MainDetail /> */}
      {/* <TabsFeatures /> */}
      <WhyYourD/>
      <GlobalStandard />
      <BlogCard />


  
      {/* <BlogCard /> */}

      <LogoHero text1="The easiest way to control your Data" />
      <Footer />
      {/* <ScrollProgressBar/> */}
    </>
  );
}
