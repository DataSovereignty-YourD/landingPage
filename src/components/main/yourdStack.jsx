import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import YourDStack from "../../assets/img/YourDStack.png";
import { MainIsVisibleState } from "../../assets/recoil/mainIsVisible";
import { useIsVisible } from "../../hooks/view";
import YourDStack2 from '../../assets/img/YourDStack2.png';
export default function YourdStack() {
  const [mainIsVisible,setMainIsVisible] = useRecoilState(MainIsVisibleState);
  const ref1 = useRef(null);
  const isVisible = useIsVisible(ref1);

  useEffect(()=> {
    setMainIsVisible(()=>{return isVisible});
  },[isVisible])

  return (
    <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col text-center w-full sm:mx-0 relative py-10 md:py-20 gap-5">
        <div className="font-pre-bold font-bold text-2xl md:text-5xl">
          {" "}
          Your<span className="text-[#fccc00] ">D</span>{" "}
          Gateway
        </div>
        <div className=" text-lg md:text-2xl font-pre-regular font-bold">
          {" "}
          <span className="text-[#000]">Quick</span> and{" "}
          <span className="text-[#000]"> Easy</span> to get started with{" "}
          <span className="text-[#000]">True Web 3.0</span>, YourD is here to
          guide you
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 relative py-10 backdrop-blur-sm ">
        <img
          src={YourDStack2}
          alt="YourDStack"
          className="flex object-contain w-full md:w-3/6 bg-white relative"
        />
        <div className="flex flex-col  md:gap-10 relative justify-center text-left ">
          <img
            src={require("../../assets/icon/rightArrow.png")}
            alt="rightArrow"
            className="w-16 object-contain"
          />
          <div className="font-pre-light text-lg sm:text-xl md:text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
            Streamlining Your Web 3.0 Service Development
            {/* Taking back <span className="text-[#fccc00]">ownership of your data.</span><br/> Paving the Way for <span className="text-[#007aff]">Web3.0</span>   */}
          </div>
          <div ref={ref1} className="font-pre-regular font-bold text-[12px] sm:text-[14px] md:text-lg leading-4 md:leading-6 text-gray400 ">
            YourD opens up new opportunities by building services around user
            data ownership. Partners can use YourD to simplify the process of
            building Web 3.0 services.
          </div>
        </div>
        {/* <img src={YourDStack} alt="YourDStack" className="md:flex hidden object-contain w-full md:w-3/6 bg-white relative"/> */}
      </div>
    </div>
  );
}
