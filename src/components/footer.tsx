import logo from "../assets/img/YourD-Logo-high.png";
import {
  FaSquareXTwitter,
  FaLinkedin,
  FaDiscord,
  FaMedium,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import ContactUs from "./contactUs";

const Footer = () => {
  const { t, i18n } = useTranslation(["page"]);
  return (
    <div
      id="footer"
      className="flex justify-center items-center bg-opacity-50 relative"
    >
      <footer className="w-full h-full relative">
        <div className="flex flex-col justify-center items-center bg-opacity-60 bg-transparent">
          <img src={logo} alt="LOGO" className="w-20 sm:w-32" />
          <div className="flex text-sm sm:text-2xl text-black mt-4">
            0xcatbox@gmail.com
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://twitter.com/0xCatbox"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out p hover:bg-yellow-500 hover:text-white"
            >
              <FaSquareXTwitter size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/yourd/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out  hover:bg-yellow-500 hover:text-white"
            >
              <FaLinkedin size={28} />
            </a>
            <FaDiscord
              size={28}
              className="hover:text-yellow-500 transition relative"
            />
            <FaMedium
              size={28}
              className="hover:text-yellow-500 transition relative"
            />
          </div>
          <div className="font-bold mt-4 mb-4">
            © 2023 YourD, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
