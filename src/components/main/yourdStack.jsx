import React, { useState } from "react";
import YourDStack from "../../assets/img/YourDStack.png";

export default function YourdStack() {
  const [activeLayer, setActiveLayer] = useState(null);
  const handleButtonClick = () => {
    setActiveLayer((prevLayer) => (prevLayer ? null : "Data Selling Layer"));
  };
  return (
    <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto h-screen flex flex-col justify-center items-center bg-gray-400">
      <div className="flex flex-col text-center w-full sm:mx-0 relative py-10 md:py-20 gap-5">
        <div className="font-pre-bold text-2xl md:text-5xl">
          {" "}
          Your<span className="text-[#fccc00] font-pre-extrabold">D</span>{" "}
          Gateway
        </div>
        <div className=" text-lg md:text-2xl font-pre-medium">
          {" "}
          <span className="text-[#000]">Quick</span> and{" "}
          <span className="text-[#000]"> Easy</span> to get started with{" "}
          <span className="text-[#000]">True Web 3.0</span>, YourD is here to
          guide you
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 relative py-10 backdrop-blur-sm ">
        <img
          src={YourDStack}
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
          <div className="font-medium text-[12px] sm:text-[14px] md:text-lg leading-4 md:leading-6 text-gray400 ">
            YourD builds services around user data ownership, which opens up new
            opportunities for personalized advertising, selling AI training
            data, and more. Other services can use YourD to Streamlining the
            process of building Web 3.0 services.
          </div>
        </div>
        {/* <img src={YourDStack} alt="YourDStack" className="md:flex hidden object-contain w-full md:w-3/6 bg-white relative"/> */}
      </div>
    </div>
  );
}
