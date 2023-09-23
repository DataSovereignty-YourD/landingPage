import React from 'react';

const OutlineButton = () => {
  return <DrawOutlineButton>Learn More..</DrawOutlineButton>;
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative font-medium text-black transition-colors duration-[400ms] hover:text-[#fccc00] w-24 h-full"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#fccc00] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#fccc00] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#fccc00] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#fccc00] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default OutlineButton;
