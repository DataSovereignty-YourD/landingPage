import React, { useState } from 'react';
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const DropDown = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleItemClick = (path) => {
    setOpen(false);
    navigate(path);
  };
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
    {
      id: 6,
      solution: 'About Us',
      //  path: 'about_us'
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 font-pre-bold rounded-full border-black border-2 hover:bg-[#fccc00] transition-colors"
      >
        <span className="font-medium text-sm">Solutions</span>
        <FiChevronDown className={`${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-full left-1/2 -translate-x-1/2 w-48">
          {solutions.map((solution) => (
            <li
              key={solution.id}
              onClick={() => handleItemClick(solution.path)}
              className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-yellow-100 text-slate-700 hover:text-[#fccc00] transition-colors cursor-pointer"
            >
              {solution.solution}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
