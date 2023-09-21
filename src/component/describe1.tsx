import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from '../hooks/view';

interface DescribeProps {
  text1: string;
  subText1: string;
  text2: string;
  text3: string;
}
export default function Describe1({ text1, subText1, text2, text3 }:DescribeProps) {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <div id="container1" className="w-full h-screen text-center relative overflow-visible">
        <div
          id="layout1"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background1" ref={ref1} className="w-full h-20" />
          <div
            className={`fixed top-1/2 transition-all justify-center items-center duration-500 px-10 ease-in ${
              isVisible1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="font-bold text-4xl">{text1}</div>
            <div className="font-medium text-lg">{subText1}</div>
          </div>
        </div>
      </div>

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
            className={`fixed top-1/2 flex justify-center items-center transition-all ease-in duration-500 px-10 delay-100 ${
              isVisible2
                ? 'opacity-100 -translate-y-1/2'
                : 'opacity-0 translate-y-0'
            }`}
          >
            <div className="font-bold text-2xl text-black overflow-hidden">
              {text2}
            </div>
          </div>
        </div>
      </div>

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
            className={`fixed top-1/2 flex justify-center items-center transition-all ease-in duration-500 px-10 delay-100 ${
              isVisible3
                ? 'opacity-100 -translate-y-1/2'
                : 'opacity-0 translate-y-0'
            }`}
          >
            <div className="font-bold text-2xl text-black overflow-hidden">
              {text3}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
