import React from "react";
import twitter from "../assets/img/twitter.png";
import linkedin from "../assets/img/linkedin.png";
import logo from "../assets/img/YourD-Logo-high.png";
const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 px-4 flex flex-row items-center text-[12px] sm:text-sm h-12">
      <div className="container mx-auto text-center items-center justify-center">
        <p className="text-gray-600 text-left ml-5">
          © YourD
        </p>
      </div>
      <div id="icon" className="flex flex-row w-fit pr-4 justify-right gap-4 items-center">
        <a
          href="https://twitter.com/0xCatbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} className="h-8 w-auto object-contain"></img>
        </a>

        <a
          href="https://www.linkedin.com/company/yourd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="h-8 w-auto object-contain"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
