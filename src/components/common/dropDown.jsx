import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
const DropDown = () => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const handleItemClick = (path) => {
    if (isAnimationCompleted) {
      setOpen(false);
      // 라우팅 로직 추가...
    }
  };
  const [open, setOpen] = useState(false);
  const solutions = [
    {
      id: 1,
      solution: 'YourD App',
      path: 'yourd_pass',
    },
    {
      id: 2,
      solution: 'YourD Authentication',
      path: 'yourd_web_auth',
    },

    {
      id: 3,
      solution: 'YourD Payment',
      path: 'yourd_payment',
    },

    {
      id: 4,
      solution: 'YourD Analytics',
      path: 'yourd_analytics',
    },
    {
      id: 5,
      solution: 'YourD Data Leverage Infra',
      path: 'yourd_infra',
    },
    { id: 6, solution: 'About Us', path: 'about_us' },
  ];

  return (
    <div>
      <motion.div animate={open ? 'open' : 'closed'} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 font-pre-bold rounded-full border-black border-2  hover:bg-[#fccc00] transition-colors"
        >
          <span className="font-medium text-sm">Solutions</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          onAnimationComplete={() => setIsAnimationCompleted(true)}
        >
          {solutions.map((solution) => (
            <motion.li
              variants={itemVariants}
              onClick={() => handleItemClick(solution.path)}
              className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-yellow-100 text-slate-700 hover:text-[#fccc00] transition-colors cursor-pointer"
            >
              <Link to={solution.path}>{solution.solution}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default DropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      // 지속 시간을 0.1초로 설정
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      duration: 0.05, // 지속 시간을 0.1초로 설정
      when: 'afterChildren',
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      // 항목별 지속 시간을 0.1초로 설정
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      // 항목별 지속 시간을 0.1초로 설정
      when: 'afterChildren',
    },
  },
};

// 나머지 DropDown 컴포넌트 코드는 동일하게 유지

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};
const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
