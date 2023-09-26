import Describe1 from '../components/describe1';
import Footer from '../components/footer';
import LogoHero from '../components/utils/logoHero';
import BlogCard from '../components/blogCard';
import MainDetail from '../components/mainDetail';
import GlobalStandard from './globalStandard';
import { useScroll } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import React from 'react';
import TabsFeatures from '../components/tabsFeatures';
import Prove from '../components/prove';
import Own from '../components/own';
import Apply from '../components/apply';
import WhyYourD from '../components/whyYourD';
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
        //  text1={
        //    "YourD was created to tackle the challenges of data sovereignty and privacy in the modern web"
        //  }
        //  text2={
        //    "We fundamentally address data sovereignty with a novel authentication protocol and infrastructure"
        //  }
      />{' '}
      {/* <div className="flex items-center justify-center flex-col h-1/2">
        <Prove />
        <Own />
        <Apply />
      </div> */}
      {/* <MainDetail />
      <TabsFeatures/> */}
      <WhyYourD/>
      <GlobalStandard />
      {/* <BlogCard /> */}
      <LogoHero text1="The easiest way to control your Data" />
      <Footer />
      {/* <ScrollProgressBar/> */}
    </>
  );
}
