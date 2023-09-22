import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'tailwindcss/tailwind.css';
import { throttle } from 'lodash';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollProgress = (currentScroll / totalScroll) * 100;
    setScrollPercentage(scrollProgress);
  };

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 p-4">
      <div className="w-20 h-20">
        <CircularProgressbar
          value={scrollPercentage}
          text={'scroll'}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
