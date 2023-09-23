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

  return (
    <div className="bg-transparent w-full flex justify-between px-[10%] fixed  py-3 z-50">
      <Link to="/">
        <img src={logo} alt="logo" className="flex items-center w-16" />
      </Link>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="">
          <Link to="/ContactUs">
            <RoundedButton />
          </Link>
        </div>
        <div className=" flex gap-2 items-center ">
          <SideNav className="z-[-1]" />
        </div>
      </div>
    </div>
  );
}
