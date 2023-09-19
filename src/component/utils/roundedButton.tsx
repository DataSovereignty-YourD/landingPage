import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ContactUs from "../contactUs";

interface NavProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavLinkProps {
  text: string;
}

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};
const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};

const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <motion.a
    className="inline-block z-10 text-slate-800 w-fit font-black text-7xl hover:text-yellow-500 transition-colors"
    variants={navLinkVariants}
    transition={{
      type: "spring",
      damping: 3,
    }}
    whileHover={{
      y: -15,
      rotate: "-7.5deg",
    }}
    rel="nofollow"
    href="#"
  >
    {text}
  </motion.a>
);

const Nav: React.FC<NavProps> = ({ isOpen, setIsOpen }) => (
  <motion.nav
    className={`fixed top-0 bottom-0 left-0 w-full h-full bg-white transition-opacity backdrop-blur-md  ${
      isOpen ? "bg-opacity-60" : "bg-opacity-0"
    }`}
    animate={isOpen ? "open" : "closed"}
    variants={navVariants}
    initial="closed"
  >
    <motion.button
      className="text-3xl  text-black hover:text-yellow-500  transition-colors p-4 absolute top-8 right-8"
      whileHover={{ rotate: "180deg" }}
      onClick={() => setIsOpen(false)}
      whileTap={{ scale: 0.9 }}
    >
      <FiX />
    </motion.button>
    <motion.div
      variants={linkWrapperVariants}
      className="mt-52 my-auto w-full h-full   "
    >
      <ContactUs />
    </motion.div>
  </motion.nav>
);

const RoundedSlideButtonSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center text-white">
        <motion.button
          whileHover={{ rotate: "180deg" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-3xl bg-white text-black hover:text-yellow-500 transition-colors p-4 rounded-full"
        >
          <RoundedSlideButton />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
const RoundedSlideButton = () => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
          border-yellow-500 bg-yellow-400 px-4 py-2 font-semibold shadow-lg
          uppercase text-black transition-all duration-500
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-yellow-400
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:text-neutral-900
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95`}
    >
      <FiLogIn />

      <div className="font-semibold">Contact Us</div>
    </button>
  );
};

export default RoundedSlideButtonSideNav;
