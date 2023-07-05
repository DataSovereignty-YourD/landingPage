import React from "react";
import twitter from "../assets/img/twitter.png";
import linkedin from "../assets/img/linkedin.png";
import logo from "../assets/img/YourD-Logo-high.png";
const Footer = () => {
  return (
    <footer className="bg-gray-200 py-2 px-4 flex flex-row justify-start text-[12px] sm:text-sm">
      <div className="container mx-auto ali text-center">
        <p className="text-gray-600 text-left">
          © 2023 yourD - Altme All rights reserved
        </p>
      </div>
      <div id="icon" className="flex flex-row w-fit pr-4 justify-right ml-auto">
        <a
          href="https://twitter.com/0xCatbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} className="h-6 w-auto mr-2"></img>
        </a>

        <a
          href="https://www.linkedin.com/company/yourd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="h-6 w-auto"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
