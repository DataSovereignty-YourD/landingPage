import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navVariants = {
  open: {
    x: '0%',
    borderTopLeftRadius: '0vw',
    borderBottomLeftRadius: '0vw',
    opacity: 1,
  },
  closed: {
    x: '100%',
    borderTopLeftRadius: '50vw',
    borderBottomLeftRadius: '50vw',
    opacity: 0,
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};

const NavLink = ({ text, to, onClick, icon: Icon, smallText }) => (
  <motion.div
    className={`inline-block z-10 text-slate-800 w-fit font-black ${
      smallText ? 'text-4xl' : 'text-6xl sm:text-7xl'
    } hover:text-yellow-500 transition-colors`}
    variants={navLinkVariants}
    transition={{
      type: 'spring',
      damping: 3,
    }}
    whileHover={{
      y: -15,
      rotate: '-7.5deg',
    }}
    rel="nofollow"
  >
    <Link
      to={to}
      className="no-underline flex items-center justify-between"
      onClick={onClick}
    >
      {text}
      {Icon && <Icon className="ml-2" />} {/* 아이콘이 있으면 렌더링 */}
    </Link>
  </motion.div>
);


const Nav = ({ isOpen, setIsOpen }) => (
  <motion.nav
    className={`fixed top-0 bottom-0 left-0 w-full h-full bg-white transition-opacity backdrop-blur-md  ${
      isOpen ? 'bg-opacity-60' : 'bg-opacity-0'
    }`}
    animate={isOpen ? 'open' : 'closed'}
    variants={navVariants}
    initial="closed"
  >
    <motion.button
      className="text-2xl  text-black hover:text-yellow-500  transition-colors p-4 absolute top-8 right-8"
      whileHover={{ rotate: '180deg' }}
      onClick={() => setIsOpen(false)}
      whileTap={{ scale: 0.9 }}
    >
      <FiX />
    </motion.button>
    <motion.div
      // variants={linkWrapperVariants}
      className="flex flex-col gap-4 absolute mt-48 left-8"
    >
      <NavLink text="Home" to="/" onClick={() => setIsOpen(false)} />
      <NavLink text="Solutions" onClick={() => setIsOpen(false)} />
      <NavLink
        text="Pass"
        to="/yourd_pass"
        onClick={() => setIsOpen(false)}
        smallText={true}
      />
      <NavLink
        text="Login"
        to="/yourd_login"
        onClick={() => setIsOpen(false)}
        smallText={true}
      />
      <NavLink
        text="Analytics"
        to="/yourd_analytics"
        onClick={() => setIsOpen(false)}
        smallText={true}
      />
      <NavLink
        text="Infra"
        to="/yourd_infra"
        onClick={() => setIsOpen(false)}
        smallText={true}
      />
      <NavLink
        text="Contact Us"
        to="/contact"
        onClick={() => setIsOpen(false)}
      />
      {/* <NavLink
        text="About Us"
        to="/about"
        onClick={() => setIsOpen(false)}
      /> */}
    </motion.div>
  </motion.nav>
);

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center text-white z-[-1]">
        <motion.button
          whileHover={{ rotate: '180deg' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-2xl  bg-white/10 text-black hover:text-yellow-500 transition-colors p-4 rounded-full"
        >
          <FiMenu size={24} className="" />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default SideNav;
