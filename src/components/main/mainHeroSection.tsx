import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../../hooks/view";
import { motion } from "framer-motion";
import "../../assets/css/describe1.css";
import RoundedButton from "../utils/buttons/roundedButton";
interface DescribeProps {
  title1: string;
  title2: string;
  subText1: string;
}
export default function MainHeroSection({
  title1,
  title2,
  subText1,
}: DescribeProps) {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  function ScrollComponent() {
    return (
      <div className="text-center text-[rgba(122,122,124,0.918)]  font-pre-bold uppercase pt-8 ">
        <div className="mx-auto w-8 h-14 border-4 border-gray-300 rounded-full flex mt-2.5">
          <span className="m-auto block w-4 h-4 rounded-full bg-gray-400 animate-bounce"></span>
        </div>
        <span className="text-xs">Scroll</span>
      </div>
    );
  }

  const splitWord2 = (text: string) => {
    const word = "novel authentication protocol and infrastructure";
    const parts = text.split(word);
    return (
      <>
        {parts[0]}
        <span className="text-[#fccc00]">{word}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      <div
        id="container1"
        className="w-screen sm:w-full h-screen text-center relative font-pre-extra overflow-hidden bg-white bg-opacity-50"
      >
        <div
          id="layout1"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background1" ref={ref1} className="w-full h-10 mb-[25%] " />
          <div
            className={`fixed flex flex-col top-[30%] sm:top-[35%] transition-all justify-center items-center duration-500 px-10 ease-in gap-5 ${
              isVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex first-line:">
              <div className="font-pre-bold text-5xl sm:text-7xl overflow-visible pb-1 gradientText">
                {title1}&nbsp;{title2}
              </div>
            </div>
            <div className="font-medium text-lg sm:text-2xl leading-7 max-w-[600px] text-center font-pre-medium">{subText1}</div>
            <div className="bg-white">
              <RoundedButton/>
            </div>
          </div>
          <div
            className={`fixed transition-all bottom-0 duration-500 ease-in ${
              isVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <ScrollComponent />
          </div>
        </div>
      </div>
    </>
  );
}
