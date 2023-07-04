import React from "react";
import twitter from "../assets/img/twitter.png";
import linkedin from "../assets/img/linkedin.png";
const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 px-10 flex flex-row justify-start">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-left text-xl">ⓒ YOURD</p>
      </div>
      <div id="icon" className="flex flex-row justify-right mr-20">
        <img src={twitter} className="h-10 w-auto mr-2"></img>
        <img src={linkedin} className="h-10 w-auto"></img>
      </div>
    </footer>
  );
};

export default Footer;
