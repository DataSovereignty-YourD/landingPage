import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../hooks/view";

export default function MainPage() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  useEffect(() => {
    console.log(isVisible2);
  }, [isVisible2]);

  return (
    <>
      <div id="container" className={`w-full h-screen text-center relative `}>
        <div
          id="layout"
          className="absolute inset-0  flex justify-center items-center "
        >
          <div id="background" ref={ref1} className={`w-full`}/>
            <div
              className={`fixed transition-all duration-700 px-10 ease-in  ${
                isVisible1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="font-bold text-4xl">Ignite Data Ownership</div>
              <div className="font-medium text-lg">
                Take Control of Your Data Ownership
              </div>
            </div>
        </div>
      </div>
      <div
        id="container2"
        className={`w-full h-screen text-center relative overflow-visible`}
      >
        <div
          id="layout2"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background2" ref={ref2} className={`w-full h-20`}/>
            <div
              className={`fixed z-50 top-1/2  flex justify-center items-center transition-all ease-in duration-700 px-10 delay-300 ${
                isVisible2
                  ? "opacity-100 -translate-y-1/2 "
                  : "opacity-0 translate-y-0"
              }
              `}
            >
              <div className="font-bold text-2xl text-black overflow-hidden">
                We lead the revolutionary change in personal data ownership for
                you
              </div>
            </div>
        </div>
      </div>
      <div className="w-full h-screen bg-blue-50"></div>
    </>
  );
}
