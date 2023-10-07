import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/YourD-Logo-high.png';
import SideNav from '../../pages/sideNavPage';
import { Link } from 'react-router-dom';
import RoundedButton from '../utils/buttons/roundedButton';
export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <div onMouseEnter={()=>setTopBarVisible(true)} onMouseLeave={()=>setTopBarVisible(false)} className="bg-white h-16  w-full flex justify-between px-4 sm:px-[5%] fixed z-50">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className=" flex items-center w-12 sm:w-16"
        />
      </Link>
      <div className=" flex flex-row  sm:gap-2 items-center justify-center font-sf-pro-text">
        {
        <div className={`flex flex-col ${isTopBarVisible ? '':''}`}>
          <div className='px-5 py-[10px] bg-gray-100 rounded-full text-[16px]'>Solution</div>
            {isTopBarVisible&&<div className='flex flex-col absolute mt-16 bg-white '>
            <span>YourD Login</span>
            <span>YourD Pass</span>
            <span>YourD Analytics</span>
            <span>YourD Data Leverage Infra</span>
          </div>}
        </div>
        }
        {/* <div>About</div> */}
          <Link to="/contact">
            <RoundedButton />
          </Link>
        {/* <div className=" w-10 h-10 flex items-center  ">
          <SideNav />
        </div> */}
      </div>
    </div>
  );
}
