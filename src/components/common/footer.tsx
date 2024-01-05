import logo from "../../assets/img/YourD-Logo-high.png";
import {
  FaSquareXTwitter,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa6";

const Footer = () => {
  return (
      <footer className="flex h-fit justify-between items-start relative bg-opacity-60 pt-10 pb-16 bg-transparent mx-5 sm:mx-10 md:mx-16 lg:mx-[136px]">
          <div className="flex flex-col  items-start ">
            <img src={logo} alt="LOGO" className="h-14 object-contain mb-5" />
            <div className="font-pre-regular text-[14px]">
              © 2023 YourD, Inc. All rights reserved.
            </div>
            <a href="https://drive.google.com/file/d/1Z50XyU4i0pArnqUhHay8W9cDHWZRQc15/view?usp=drive_link"  className="font-pre-bold text-[14px] ">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex text-sm sm:text-xl text-black font-pre-bold ">
              0xcatbox@gmail.com
            </div>
            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/company/yourd/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out  hover:bg-yellow-500 hover:text-white"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://twitter.com/0xCatbox"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out p hover:bg-yellow-500 hover:text-white"
              >
                <FaSquareXTwitter size={28} />
              </a>
              <FaMedium
                size={28}
                className="hover:text-yellow-500 transition relative"
              />
            </div>
          </div>
          
      </footer>
  );
};

export default Footer;
