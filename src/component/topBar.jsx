import {
  FaSquareXTwitter,
  FaLinkedin,
  FaDiscord,
  FaMedium,
} from "react-icons/fa6";
import logo from "../assets/img/YourD-Logo-high.png";
import SideNav from "./sideNav";
import { Link } from "react-router-dom";
import RoundedButton from "./utils/roundedButton";
export default function TopBar() {
  const snsLinks = [
    {
      href: "https://twitter.com/0xCatbox",
      icon: (
        <FaSquareXTwitter
          className="transition duration-300 ease-in-out  hover:text-yellow-500"
          size={24}
        />
      ),
    },
    {
      href: "https://www.linkedin.com/company/yourd/",
      icon: (
        <FaLinkedin
          className="transition duration-300 ease-in-out  hover:text-yellow-500"
          size={24}
        />
      ),
    },
    {
      icon: (
        <FaMedium
          className="transition duration-300 ease-in-out  hover:text-yellow-500"
          size={24}
        />
      ),
    },
  ];

  return (
    <div className=" bg-opacity-60 bg-transparent w-full flex justify-between fixed px-[15%] py-3 z-50">
      <Link to="/">
        <img src={logo} alt="logo" className="flex items-center w-16" />
      </Link>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="">
          <Link to="/ContactUs">
            <RoundedButton />
          </Link>
        </div>
        <div className=" flex gap-2 items-center">
          {snsLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
          <SideNav className="z-[-1]" />
        </div>
      </div>
    </div>
  );
}
