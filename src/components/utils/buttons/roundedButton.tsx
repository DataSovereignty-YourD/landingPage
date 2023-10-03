import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import {  useNavigation } from "react-router-dom";

const RoundedButton = () => {
  return (
    <div className="flex items-center justify-center">
      <RoundedSlideButton />
    </div>
  );
};

const RoundedSlideButton = () => {
  
  return (
    <Link
    to={'/contact'}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-sm border-black border-[1px]
        sm:px-3 px-2 sm:py-2 py-1 font-semibold uppercase text-black transition-all duration-500
        sm:text-sm text-xs whitespace-nowrap w-fit
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-yellow-400
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:border-none
        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <span>Contact us</span>
    </Link>
  );
};

export default RoundedButton;
