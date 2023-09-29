import React, { useState, useEffect } from 'react';
import logo from '../assets/img/YourD-Logo-high.png';
import SideNav from './sideNav';
import { Link } from 'react-router-dom';
import RoundedButton from './utils/buttons/roundedButton';
export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <div className="bg-white  w-full flex justify-between px-4 sm:px-[5%] fixed z-50">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className=" flex items-center w-12 sm:w-16"
        />
      </Link>
      <div className=""></div>
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
