import {
  FaSquareXTwitter,
  FaLinkedin,
  FaDiscord,
  FaMedium,
} from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import logo from "../assets/img/YourD-Logo-high.png";
import SideNav from "./sideNav";
import { Link } from "react-router-dom";
import RoundedButton from "./utils/buttons/roundedButton";
export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치를 가져옵니다.
      const currentScrollY = window.scrollY;

      // 스크롤이 내려갔으면 탑바를 숨기고, 스크롤이 멈추거나 올라가면 탑바를 표시합니다.
      setTopBarVisible(currentScrollY < lastScrollY || currentScrollY === 0);

      // 현재 스크롤 위치를 저장합니다.
      setLastScrollY(currentScrollY);
    };

    // 스크롤 이벤트 리스너를 추가합니다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-white sm:bg-transparent w-full flex justify-between px-4 sm:px-[10%] fixed py-2 sm:py-3 z-50 ${
        isTopBarVisible ? "" : "hidden"
      }`}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className=" flex items-center w-12 sm:w-16"
        />
      </Link>
      <div className=" flex flex-row  sm:gap-2 items-center justify-center">
        <div className=" w-20 sm:w-32">
          <Link to="/ContactUs">
            <RoundedButton />
          </Link>
        </div>
        <div className=" w-10 h-10 flex items-center  ">
          <SideNav />
        </div>
      </div>
    </div>
  );
}
