import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../assets/img/YourD-Logo-high.png";
import meta from "../assets/img/meta.png";
import twitterx from "../assets/img/twitterx.png";
import x from "../assets/img/X.png";
import linkedin from "../assets/img/linkedin.png";
import instagram from "../assets/img/instagram.png";
import discord from "../assets/img/discord.png";
export default function TopNavi() {
  return (
    <div className="h-12 bg-black sm:h-16 w-full text-sm sm:text-xl bg-transparent fixed pr-4 lg:px-32 md:px-20 sm:px-20 sm:mr-20 transition-all duration-100 flex justify-between items-center backdrop-blur-md z-30">
      <HashLink smooth to="/#">
        <img src={logo} className="h-12 sm:h-16 object-cover " alt="Logo" />
      </HashLink>
      {/* <HashLink
          smooth
          to="/#Developer"
          className=" text-2l w-fit mx-auto font-sf-pro-text font-bold text-center align-center"
        >
          Developers
        </HashLink> */}

      {/* <HashLink
          smooth
          to="/#Product"
          className=" text-2l w-fit mx-auto font-sf-pro-text font-bold text-center align-center"
        >
          Product
        </HashLink> */}
      <div className="flex justify-center items-center gap-2">
        <a
          href="https://twitter.com/0xCatbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discord} className="h-8  object-contain w-auto"></img>
        </a>
        <a
          href="https://twitter.com/0xCatbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} className="h-8 w-auto object-contain"></img>
        </a>
        <a
          href="https://twitter.com/0xCatbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={x}
            className="h-8 w-auto object-contain bg-white rounded-lg"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/company/yourd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="h-8 w-auto object-contain"></img>
        </a>

        <a
          className=" w-fit mx-auto font-sf-pro-text font-bold text-center align-center text-white rounded-3xl border border-black py-2 px-3 hover:bg-[#007aff] transition-all duration-300 hover:text-[#FFD400]"
          href="mailto:0xcatbox@gmail.com"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
