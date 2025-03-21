import MainHeroSection from "../components/main/mainHeroSection";
import Footer from "../components/common/footer";
import GlobalStandard from "../components/main/globalStandard";
import { useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import WhyYourD from "../components/main/whyYourD";
import YourdStack from "../components/main/yourdStack";
import backImg from "../assets/img/global-back.png";
import Solution from "../components/main/solution";

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
            <MainHeroSection
                title1={"Ignite"}
                title2={"Data Ownership"}
                subText1={
                    "DID auth-based Web 3.0 RegTech infrastructure"
                }
                subText2={":Data management, Login, Crypto payment solution"}
            />
            <YourdStack />
            <Solution />
            {/* <DetailProductPage /> */}
            {/* <Persona /> */}
            <div className="w-full h-fit relative bg-gray150 bg-opacity-50">
                <div className="mx-5 sm:mx-10 md:mx-16 lg:mx-[136px] min-h-[100vh] ">
                    <WhyYourD />
                </div>
            </div>
            <div className="w-full h-fit bg-[#171717] bg-opacity-90 relative overflow-hidden">
                <div className="mx-5 sm:mx-10 md:mx-16 lg:mx-[136px] ">
                    <GlobalStandard />
                </div>
                <img src={backImg} alt="back" className="absolute bottom-0 sm:-bottom-20 md:-bottom-40 sm:right-40 md:right-72" />

            </div>
        </div>
    );
}
