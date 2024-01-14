import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(true);

  const handleItemClick = (path) => {
    setOpen(false);
    setMenuIcon(true);
    navigate(path);
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    setMenuIcon((prev) => !prev);
  };

  const solutions = [
    {
      id: 1,
      solution: "YourD App",
      path: "yourd_pass",
    },
    {
      id: 2,
      solution: "YourD Authentication",
      path: "yourd_web_auth",
    },
    {
      id: 3,
      solution: "YourD Payment",
      path: "yourd_payment",
    },
    {
      id: 4,
      solution: "YourD Analytics",
      path: "yourd_analytics",
    },
    {
      id: 5,
      solution: "YourD Data Leverage Infra",
      path: "yourd_infra",
    },
    {
      id: 6,
      solution: "About Us",
      path: "about_us",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 px-4 py-[6px] font-pre-bold sm:rounded-full duration-500 border-black sm:border-2 sm:hover:bg-[#fccc00] transition-colors"
      >
        <span className="font-medium hidden sm:flex">Solutions</span>
        <FiChevronDown className={`${open ? 'rotate-180' : ''} hidden sm:flex`} />
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className="visible sm:hidden">
          {menuIcon ? <FiMenu size={24} /> : <FiX size={24} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
            className="flex flex-col gap-2 px-12 sm:px-2 rounded pt-6 pb-10 bg-white shadow-xl absolute top-full -left-[323px] sm:-left-[30px] -translate-x-1/2 w-[390px] sm:w-48 sm:py-2"
          >
            {solutions.map((solution) => (
              <motion.li
                key={solution.id}
                onClick={() => handleItemClick(solution.path)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 w-full p-2 text-xl sm:text-xs font-medium whitespace-nowrap rounded-md hover hover:bg-yellow-100 text-slate-700 hover:text-[#fccc00] transition-colors cursor-pointer"
              >
                {solution.solution}
              </motion.li>
            ))}
            <Link
              to="/contact"
              onClick={() => handleItemClick("contact")}
              className="visible sm:hidden w-fit h-6 mt-6 border border-black mx-auto rounded-xl p-4 items-center justify-center flex font-semibold bg-black text-2xl text-[#fccc00]"
            >
              Contact Us
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
