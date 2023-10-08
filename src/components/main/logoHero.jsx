import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIsVisible } from '../../hooks/view';
import RoundedButton from '../utils/buttons/roundedButton';

const LogoHero = ({ text1 }) => {
  const ref4 = useRef(null);
  const isVisible4 = useIsVisible(ref4);

  return (
    <div
      id="container4"
      className={`w-screen h-screen text-center relative font-sf-pro-text `}
    >
      <div
        id="layout4"
        className="absolute inset-0 flex justify-center items-center"
      >
        <div id="background4" ref={ref4} className={`w-full h-10 mt-20 sm:mt-0 `} />
        <div
          className={`fixed bottom-20 w-full flex h-full justify-center items-center transition-all ease-in duration-500 z-0 sm:px-10 delay-100 ${
            isVisible4
              ? 'opacity-100 translate-y-4'
              : 'opacity-0 translate-y-0 hidden'
          }
          `}
        >
          <section className=" items-center justify-center flex flex-col gap-10 w-full">
            <h1 className="text-center text-2xl px-10 sm:px-0 sm:text-4xl max-w-xl md:text-6xl font-pre-semibold">
              {text1}
            </h1>
            {isVisible4 && (
              <Link to={'/contact'} >
                <RoundedButton />
              </Link>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LogoHero;
