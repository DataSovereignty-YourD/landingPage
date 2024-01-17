import logo from "../../assets/img/YourD-Logo-high.png";
import { FiChevronDown } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./dropDown";
export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  const handleItemClick = (path) => {
    setOpen(false);
    
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="flex flex-row bg-white w-full items-center justify-center fixed z-50  mx-auto">
      <div
        className={` max-w-[1660px]  w-full flex flex-row justify-between items-center pl-4 sm:px-[5%] transition-all duration-300 `}
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
          <div className="w-full">
            <DropDown />
          </div>
          <div ref={dropdownRef} className="relative w-full hidden sm:flex">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-4 py-[6px] font-pre-bold sm:rounded-full duration-500  sm:hover:bg-[#fccc00] transition-colors"
              >
              Company
              <FiChevronDown
                className={`${open ? "rotate-180" : ""} hidden sm:flex`}
              />
            </div>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.1 }}
                className="flex flex-col gap-2 px-12 sm:px-2 rounded pt-6 pb-10 bg-white shadow-xl absolute top-full right-0  sm:-left-[30px] -translate-x-1/2 w-screen sm:w-48 sm:py-2"
                >
                <Link
                  to="/about_us"
                  onClick={() => handleItemClick("about_us")}
                  className="flex items-center gap-2 w-full p-2 text-xl sm:text-xs font-medium whitespace-nowrap rounded-md hover hover:bg-yellow-100 text-slate-700 hover:text-[#fccc00] transition-colors cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => handleItemClick("contact")}
                  className="flex items-center gap-2 w-full p-2 text-xl sm:text-xs font-medium whitespace-nowrap rounded-md hover hover:bg-yellow-100 text-slate-700 hover:text-[#fccc00] transition-colors cursor-pointer"
                >
                  Contact Us
                </Link>
              </motion.ul>
            )}
          </div>

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
