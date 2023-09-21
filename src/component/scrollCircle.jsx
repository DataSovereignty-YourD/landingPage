import React, { useEffect, useState } from "react";

export default function ScrollCircle() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="h-[2000px] relative">
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `conic-gradient(#0000 0% ${
              scrollPosition * 100
            }%, #fff0 ${scrollPosition * 100}% 100%)`,
          }}
        ></div>
      </div>
    </div>
  );
}
