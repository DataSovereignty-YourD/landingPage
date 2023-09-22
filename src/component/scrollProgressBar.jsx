import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'tailwindcss/tailwind.css';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollProgress = (currentScroll / totalScroll) * 100;
    setScrollPercentage(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 p-4">
      <div className="w-16 h-16">
        <CircularProgressbar value={scrollPercentage} text={`${Math.round(scrollPercentage)}%`} />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
