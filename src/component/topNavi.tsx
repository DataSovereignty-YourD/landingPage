import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/YourD-Logo-high.png";
export default function TopNavi() {
  return (
    <div className="h-12 sm:h-16 w-full text-sm sm:text-xl bg-transparent fixed pr-4 lg:px-32 md:px-20 sm:px-20 sm:mr-20 transition-all duration-100 flex justify-between items-center backdrop-blur-md z-30">
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
      <div>
        <HashLink
          smooth
          to="/#Solution"
          className=" w-fit mx-auto font-sf-pro-text font-bold text-center align-center px-1 sm:px-2 hover:text-[#FFD400]"
        >
          Solution
        </HashLink>
        <HashLink
          smooth
          to="/#Price"
          className="w-fit mx-auto font-sf-pro-text font-bold text-center align-center px-1 sm:px-2 hover:text-[#FFD400]"
        >
          Price
        </HashLink>
        <HashLink
          smooth
          to="/#FAQ"
          className="w-fit mx-auto font-sf-pro-text font-bold text-center align-center px-2 sm:px-2 hover:text-[#FFD400]"
        >
          FAQ
        </HashLink>

        <a
          className=" w-fit mx-auto font-sf-pro-text font-bold text-center align-center rounded-3xl border border-black py-2 px-3 hover:bg-[#007aff] transition-all duration-300 hover:text-[#FFD400]"
          href="mailto:0xcatbox@gmail.com"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
