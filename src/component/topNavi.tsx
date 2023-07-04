import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/YourD-Logo-high.png";
export default function TopNavi() {
  return (
    <div className="h-16 w-full bg-white bg-opacity-95 fixed lg:px-64 md:px-40 sm:px-16 transition-all duration-300 flex justify-between items-center">
      <HashLink smooth to="#Home">
        <img src={logo} className="h-16 w-fit mx-auto" alt="Logo" />
      </HashLink>
      <div className="flex space-x-4 ">
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
        <HashLink
          smooth
          to="/#Solution"
          className="text-2l w-fit mx-auto font-sf-pro-text font-bold text-center align-center"
        >
          Solution
        </HashLink>
        <HashLink
          smooth
          to="/#FAQ"
          className="text-2l w-fit mx-auto font-sf-pro-text font-bold text-center align-center"
        >
          FAQ
        </HashLink>

        <a
          className="text-2l w-fit mx-auto font-sf-pro-text font-bold text-center align-center"
          href="mailto:0xcatbox@gmail.com"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
