import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../hooks/view";
import { motion } from "framer-motion";
import "../assets/css/describe1.css";
interface DescribeProps {
  title1: string;
  title2: string;
  subText1: string;
  // text1: string;
  // text2: string;
}
export default function Describe1({
  title1,
  title2,
  subText1,
  // text1,
  // text2,
}: DescribeProps) {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  const splitWord1 = (text: string) => {
    const word = "data sovereignty and privacy";
    const parts = text.split(word);
    return (
      <>
        {parts[0]}
        <span className="text-[#fccc00]">{word}</span>
        {parts[1]}
      </>
    );
  };

  function ScrollComponent() {
    return (
      <div className="text-center text-[rgba(122,122,124,0.918)] font-bold uppercase pt-8 ">
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
      <div className="h-20 relative " />
      <div
        id="container1"
        className="w-screen sm:w-full h-screen text-center relative font-sf-pro-text overflow-hidden"
      >
        <div
          id="layout1"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background1" ref={ref1} className="w-full h-10  " />
          <div
            className={`fixed flex flex-col top-[30%] sm:top-[45%] transition-all justify-center items-center duration-500 px-10 ease-in gap-5 ${
              isVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex first-line:">
              <div className="font-bold text-5xl sm:text-6xl overflow-visible pb-1 gradientText">
                {title1}&nbsp;{title2}
              </div>
            </div>



            <div className="font-medium text-xl sm:text-2xl text-left">{subText1}</div>

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

      {/* <div className="h-20 relative w-screen" />
      <div id="container2" className="w-screen sm:w-full h-screen text-center relative  overflow-hidden">

        <div
          id="layout2"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background2" ref={ref2} className="w-full h-10" />
          <div
            className={`fixed top-1/2 flex justify-center items-center transition-all ease-in duration-500 sm:px-10 delay-100 ${
              isVisible2
                ? "opacity-100 -translate-y-1/2"
                : "opacity-0 translate-y-0"
            }`}
          >
            <div className="font-bold text-xl sm:text-3xl text-black overflow-hidden">
              {splitWord1(text1)}
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="h-20 relative w-screen" />
      <div
        id="container3"
        className="w-screen sm:w-full h-screen text-center relative  overflow-hidden"
      >
        <div
          id="layout3"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background3" ref={ref3} className="w-full h-20" />
          <div
            className={`fixed top-1/2 flex justify-center items-center transition-all ease-in duration-500 sm:px-10 delay-100 ${
              isVisible3
                ? "opacity-100 -translate-y-1/2"
                : "opacity-0 translate-y-0"
            }`}
          >
            <div className="font-bold text-xl sm:text-3xl text-black overflow-hidden">
              {splitWord2(text2)}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
