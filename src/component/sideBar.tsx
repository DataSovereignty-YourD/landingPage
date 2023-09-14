import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SideBar() {

  return (
    <div className="fixed left-8 top-1/4 flex flex-col items-center bg-transparent space-y-1 group gap-8">
      {['container', 'container2'].map(
        (section, index, arr) => (
          <div key={section} className="flex flex-col items-center ">
            <HashLink
              smooth
              to={`/#${section}`}
              className="w-4 h-4 bg-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition relative"
            >
              <div className="absolute left-6 text-black opacity-0 group-hover:opacity-100 transition duration-300">
                {section}
              </div>
            </HashLink>
            
          </div>
        )
      )}
    </div>
  );
}
