import { useRef } from "react";
import { useIsVisible } from "../../hooks/view";
import "../../assets/css/describe1.css";
import RoundedButton from "../utils/buttons/roundedButton";
import { useRecoilState } from "recoil";
import { MainIsVisibleState } from "../../assets/recoil/mainIsVisible";
import { Link } from "react-router-dom";

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
  const [mainIsVisible,setMainIsVisible] = useRecoilState(MainIsVisibleState);
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

  return (
    <>
      <div
        id="container1"
        className="w-screen sm:w-full h-screen text-center relative overflow-hidden bg-white bg-opacity-50"
      >
        <div
          id="layout1"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background1" ref={ref1} className="w-full h-10 mb-[25%] " />
          <div
            className={`fixed flex flex-col top-[30%] sm:top-[35%] transition-all justify-center items-center duration-500 px-10 ease-in gap-5 ${mainIsVisible && 'hidden'} ${
              isVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex first-line:">
              <div className="font-pre-bold  text-5xl sm:text-7xl overflow-visible pb-3 gradientText">
                {title1}&nbsp;{title2}
              </div>
            </div>
            <div className="text-lg sm:text-2xl leading-7 max-w-[600px] text-center font-pre-regular font-bold ">{subText1}</div>
            <div className="bg-white">
            <Link
            to="/contact"
            className="hidden sm:flex h-16 justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold border-black border-2 rounded-full transition-all duration-300 hover:bg-[#fccc00]">
              Contact Us
            </span>
          </Link>
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
