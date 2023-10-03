import React, { useState } from "react";
import YourDStack from "../../assets/img/YourDStack.png";

export default function YourdStack() {
  const [activeLayer, setActiveLayer] = useState(null);
  const handleButtonClick = () => {
    setActiveLayer((prevLayer) => (prevLayer ? null : "Data Selling Layer"));
  };
  return (
    <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto h-screen flex flex-col justify-center items-center font-sf-pro-text">
      <div className="flex flex-col text-center w-full sm:mx-0 relative py-10 md:py-20 gap-3">
        <div className="font-bold text-2xl md:text-4xl"> Your<span className="text-[#fccc00]">D</span> Gateway</div>
        <div className="font-medium text-lg md:text-2xl "> <span className="text-[#fccc00]">Quick</span> and <span className="text-[#fccc00]"> Easy</span> to get started with  <span className="text-[#007aff]">True Web 3.0</span>, YourD is here to guide you</div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 relative py-10 backdrop-blur-sm ">
      <img src={YourDStack} alt="YourDStack" className="flex md:hidden object-contain w-full md:w-3/6 bg-white relative"/>
        <div className="flex flex-col gap-5 md:gap-10 relative justify-center text-left ">
          <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Taking back <span className="text-[#fccc00]">ownership of your data.</span><br/> Paving the Way for <span className="text-[#007aff]">Web3.0</span>  </div> {/**Beyond Blockchain's Boundaries*/}
          <div className="font-medium text-[12px] sm:text-[14px] md:text-lg leading-4 md:leading-6 text-slate-600">YourD builds services around user data ownership and provides the YourD infra to make it possible. We focus on opening up new opportunities based on this reclaimed data ownership, such as personalized advertising and the sale of AI learning data.</div>
        </div>
        <img src={YourDStack} alt="YourDStack" className="md:flex hidden object-contain w-full md:w-3/6 bg-white relative"/>
      </div>
    </div>
  );
}
