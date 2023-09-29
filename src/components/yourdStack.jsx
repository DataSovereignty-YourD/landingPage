import React, { useState } from "react";
import YourDStack from "../assets/img/YourDStack.png";
export default function YourdStack() {
  const [activeLayer, setActiveLayer] = useState(null);
  const handleButtonClick = () => {
    setActiveLayer((prevLayer) => (prevLayer ? null : "Data Selling Layer"));
  };
  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col justify-center items-center">
      <div className="font-sf-pro-text font-bold text-center w-full py-20 text-xl sm:mx-0 sm:text-3xl relative"> USE YourD, the easiest way to build web3.0 project</div>
      <img src={YourDStack} alt="YourDStack" className=" object-contain w-full lg:w-3/5 bg-white relative mx-auto"/>
    </div>
  );
}
