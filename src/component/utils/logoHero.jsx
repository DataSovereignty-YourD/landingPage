import { motion } from 'framer-motion';
import { useRef} from 'react';
import  {useIsVisible} from "../../hooks/view"
import WetButton from './wetButton';
import RoundedSlideButton from './roundedButton';

const ButtonWrapper = () => {
  return (
    <div className="flex  items-center justify-center bg-opacity-60 bg-white ">
      <WetButton />
    </div>
  );
};

const LogoHero = ({ text1, subText1 }) => {
  const ref4 = useRef(null);
  const isVisible4 = useIsVisible(ref4);
  return (
    <div
      id="container4"
      className={`w-full h-screen text-center relative overflow-visible`}
    >
      <div
        id="layout4"
        className="absolute inset-0 flex justify-center items-end"
      >
        <div id="background4" ref={ref4} className={`w-full h-20 mb-20`} />
        <div
          className={`fixed z-50 top-1/2  flex justify-center items-center transition-all ease-in duration-500 px-10 delay-100 ${
            isVisible4
              ? 'opacity-100 -translate-y-1/2 '
              : 'opacity-0 translate-y-0'
          }
          `}
        >
          <section className="bg-opacity-60 bg-white mb-20 pb-10">
            <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
              <h1 className="text-center text-4xl md:text-6xl max-w-xl font-semibold">
                {text1}
              </h1>
              <p className="text-center max-w-xl my-6">{subText1}</p>
              <ButtonWrapper />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

export default LogoHero;