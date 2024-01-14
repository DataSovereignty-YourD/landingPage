import { useState } from 'react';
import logo from '../../assets/img/YourD-Logo-high.png';
import SideNav from '../../pages/sideNavPage';
import { Link } from 'react-router-dom';
import DropDown from './dropDown';
export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(false);
 
  return (
    <div className="flex flex-row  w-screen  fixed z-50">
      <div
        className={`bg-white  w-full flex flex-row justify-between items-center pl-4 sm:px-[5%] transition-all duration-300 `}
      >
        <Link to="/" className="flex h-16 justify-center">
          <img
            src={logo}
            alt="logo"
            className=" flex items-center w-12 sm:w-16 object-contain"
          />
        </Link>

        <div
          onMouseLeave={() => setTopBarVisible(false)}
          className="flex flex-row h-16  sm:gap-10 items-center"
        >
          <div className='w-full'>
            <DropDown />
          </div>

          <Link
            to="/contact"
            className="hidden sm:flex h-16 w-full justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold border-black border-2 rounded-full transition-all duration-300 hover:bg-[#fccc00]">
              Contact Us
            </span>
          </Link>
          {/* <div className="block sm:hidden items-center">
            <SideNav />
          </div> */}
        </div>
      </div>
      {/* <div
        className={`hidden sm:flex justify-between w-full absolute mt-16 bg-white transition-all duration-300
                  ${isTopBarVisible ? `h-[136px]` : " h-0"}
                `}
      >
        <div />
        
      </div> */}
    </div>
  );
}
