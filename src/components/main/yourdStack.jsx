import React, { useState } from "react";
import YourDStack from "../../assets/img/YourDStack.png";

export default function YourdStack() {
  const [activeLayer, setActiveLayer] = useState(null);
  const handleButtonClick = () => {
    setActiveLayer((prevLayer) => (prevLayer ? null : "Data Selling Layer"));
  };
  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col justify-center items-center font-sf-pro-text">
      <div className="flex flex-col text-center w-full sm:mx-0 sm:text-3xl relative py-20 gap-3">
        <div className="font-bold text-4xl"> Your<span className="text-[#fccc00]">D</span> Gateway</div>
        <div className="font-medium text-2xl "> <span className="text-[#fccc00]">Quick</span> and <span className="text-[#fccc00]"> Easy</span> to get started with  <span className="text-[#007aff]">True Web 3.0</span>, YourD is here to guide you</div>
      </div>
      <div className="flex gap-4  relative py-10 backdrop-blur-sm">
        <div className="flex flex-col gap-10 relative justify-center">
          <div className="font-bold text-4xl">Taking back <span className="text-[#fccc00]">ownership of your data.</span><br/> Paving the Way for <span className="text-[#007aff]">Web3.0</span>  </div> {/**Beyond Blockchain's Boundaries*/}
          <div className="font-medium text-lg leading-6 text-slate-600">YourD builds services around user data ownership and provides the YourD infra to make it possible. We focus on opening up new opportunities based on this reclaimed data ownership, such as personalized advertising and the sale of AI learning data.</div>
        </div>
        <img src={YourDStack} alt="YourDStack" className=" object-contain w-full lg:w-3/6 bg-white relative"/>
      </div>
    </div>
  );
}
