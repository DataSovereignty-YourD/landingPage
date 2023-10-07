import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/img/YourD-Logo-high.png";
import SideNav from "../../pages/sideNavPage";
import { Link } from "react-router-dom";
import RoundedButton from "../utils/buttons/roundedButton";
export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(false);
  const solutions = [
    {
      id: 1,
      solution: "YourD Login",
      path: "yourd_login",
    },
    {
      id: 2,
      solution: "YourD Pass",
      path: "yourd_pass",
    },
    {
      id: 3,
      solution: "YourD Analytics",
      path: "yourd_analytics",
    },
    {
      id: 4,
      solution: "YourD Data Leverage Infra",
      path: "yourd_infra",
    },
  ];

  return (
    <div
      onMouseEnter={() => setTopBarVisible(true)}
      onMouseLeave={() => setTopBarVisible(false)}
      className="flex flex-col w-screen  fixed z-50"
    >
      <div
        className={`bg-white  w-full flex justify-between items-start px-4 sm:px-[5%] transition-all duration-300 `}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" flex items-center w-12 sm:w-16"
          />
        </Link>

        <div className=" flex flex-row h-16 sm:gap-10 items-center justify-center font-sf-pro-text">
          {
            <div className={`flex flex-col items-start justify-start z-40`}>
              <div className="px-5 py-[10px] bg-gray-100 rounded-full text-[16px]">
                Solution
              </div>
              <div
          className={`flex flex-col absolute w-fit mt-[56px] text-lg ml-2 text-[#848484] ${
            isTopBarVisible ? "opacity-100 delay-300" : "opacity-0 hidden"
          }`}
        >
          {solutions.map((solution) => {
            return (
              <Link
                to={solution.path}
                key={solution.id}
                className={`w-fit pb-1 text-[#848484] hover:text-black `}
              >
                {solution.solution}
              </Link>
            );
          })}
        </div>
            </div>
          }
          <Link to="/contact" className="flex h-16 justify-center items-center">
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[5px] border-2 border-black rounded-full transition-all duration-300 hover:bg-[#fccc00]">Contact Us</span>
          </Link>
          <div className="block sm:hidden items-center">
            <SideNav />
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between w-full absolute mt-16 bg-white transition-all duration-300
                  ${isTopBarVisible ? `h-[136px]` : " h-0"}
                `}
      >
        <div />
        
      </div>
    </div>
  );
}
