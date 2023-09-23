import Describe1 from "../component/describe1";
import Footer from "../component/footer";
import LogoHero from "../component/utils/logoHero";
import BlogCard from "../component/blogCard";
import MainDetail from "../component/mainDetail";
import ScrollProgressBar from "../component/scrollProgressBar";
import GlobalStandard from "./globalStandard";
import { useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import React from "react";

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
        className="fixed top-0 left-0 right-0 h-1 bg-[#fccc00] origin-left z-10"
        animate={controls}
      ></motion.div>
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
      <GlobalStandard />
      <BlogCard />
      <LogoHero text1="The easiest way to control your Data" />

      <Footer />
      {/* <ScrollProgressBar/> */}
    </>
  );
}
