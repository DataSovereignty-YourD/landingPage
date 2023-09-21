import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../hooks/view";

interface DescribeProps {
  text1: string;
  subText1: string;
}
export default function Describe1({ text1, subText1 }: DescribeProps) {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <div id="container1" className="w-full h-screen text-center relative">
        <div
          id="layout1"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background1" ref={ref1} className="w-full h-20 bg-black" />
          <div
            className={`fixed transition-all duration-500 px-10 ease-in ${
              isVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="font-bold text-8xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-300">
              {text1}
            </div>
            <div className="font-medium text-3xl">{subText1}</div>
          </div>
        </div>
      </div>
      <div className="h-2 relative" />
      <div
        id="container2"
        className="w-full h-screen text-center relative overflow-visible"
      >
        <div
          id="layout2"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background2" ref={ref2} className="w-full h-20" />
          <div
            className={`fixed z-50 top-1/2 flex justify-center items-center transition-all ease-in duration-500 px-10 delay-100 ${
              isVisible2
                ? "opacity-100 -translate-y-1/2"
                : "opacity-0 translate-y-0"
            }`}
          >
            <div className="font-bold text-5xl text-black overflow-hidden">
              "YourD was created to tackle the challenges of <br />
              <span className="text-[#fccc00]">
                &nbsp; data sovereignty and privacy
              </span>{" "}
              in the modern web"
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 w-full" />
      <div
        id="container3"
        className="w-full h-screen text-center relative overflow-visible"
      >
        <div
          id="layout3"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background3" ref={ref3} className="w-full h-20" />
          <div
            className={`fixed z-50 top-1/2 flex justify-center items-center transition-all ease-in duration-500 px-10 delay-100 ${
              isVisible3
                ? "opacity-100 -translate-y-1/2"
                : "opacity-0 translate-y-0"
            }`}
          >
            <div className="font-bold text-5xl text-black overflow-hidden">
              "We fundamentally address data sovereignty with a <br />
              <span className="text-[#fccc00] ">
                novel authentication protocol and infrastructure"
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 w-full" />
    </>
  );
}
