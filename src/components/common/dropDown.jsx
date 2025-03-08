import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const DropDown = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState(true);
    const dropdownRef = useRef();


    const handleItemClick = (path) => {
        if (!path) return;
        setOpen(false);
        setMenuIcon(true);
        navigate(path);
    };

    const toggleMenu = () => {
        setOpen((prev) => !prev);
        setMenuIcon((prev) => !prev);
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
            setMenuIcon(true);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", closeDropdown);
        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, []);

    const solutions = [
        {
            id: 1,
            solution: "YourD App",
            path: "/yourd_app",
        },
        {
            id: 2,
            solution: "YourD Hub",
            path: "/yourd_hub",
        },
        // {
        //     id: 2,
        //     solution: "YourD Authentication",
        //     path: "/yourd_web_auth",
        // },
        // {
        //     id: 3,
        //     solution: "YourD Payment",
        //     path: "/yourd_payment",
        // },
        // {
        //     id: 4,
        //     solution: "YourD Analytics",
        //     path: "/yourd_analytics",
        // },
        {
            id: 5,
            solution: "YourD Data Leverage Infra",
            path: "/yourd_infra",
        },
        {
            id: 6,
            solution: "YourD ADs ( Comming Soon )",
            path: "",
        },


    ];
    const subMenuItems = [
        {
            id: 7,
            subMenuItem: "About Us",
            path: "about_us",
        },
    ]

    return (
        <div className="relative w-full " ref={dropdownRef}>
            <button
                onClick={toggleMenu}
                className="flex items-center gap-2 px-4 py-[6px] font-pre-bold sm:rounded-full duration-500 bg-white  sm:hover:bg-[#fccc00] transition-colors sm:border border-gray-400"
            >
                <div className="font-medium hidden sm:flex whitespace-nowrap ">Solutions</div>
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
                        className="flex flex-col gap-2 px-12 sm:px-2 rounded pt-6 pb-10 bg-white shadow-xl absolute top-full right-0  sm:-left-[30px] -translate-x-1/2 w-screen sm:w-48 sm:py-2"
                    >
                        {solutions.map((solution) => (
                            <motion.li
                                key={solution.id}
                                onClick={() => handleItemClick(solution.path)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-2 w-full p-2 text-xl sm:text-xs font-medium whitespace-nowrap rounded-md hover hover:bg-yellow-100 text-slate-700  hover:text-[#fccc00] transition-colors cursor-pointer"
                            >
                                {solution.solution}
                            </motion.li>

                        ))}
                        <motion.ul className="mt-2 visible sm:hidden">
                            {subMenuItems.map((subMenuItem) => (
                                <motion.li
                                    key={subMenuItem.id}
                                    onClick={() => handleItemClick(subMenuItem.path)}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className=" items-center flex gap-2 w-full p-2 text-xl sm:text-xs font-medium whitespace-nowrap rounded-md hover hover:bg-yellow-100 text-slate-700 hover:text-[#fccc00] transition-colors cursor-pointer"
                                >
                                    {subMenuItem.subMenuItem}
                                </motion.li>
                            ))}
                        </motion.ul>
                        <Link
                            to="/contact"
                            onClick={() => handleItemClick("contact")}
                            className="visible sm:hidden w-fit h-6 mt-6  mx-auto rounded-xl p-6 items-center justify-center flex font-medium  text-2xl  text-[#fccc00] bg-black "
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
