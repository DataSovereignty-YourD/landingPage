import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from '../hooks/view';
import Eximg from '../assets/img/Dashborad.png';
import { motion, useInView } from 'framer-motion';
import Example from './example';
import Footer from '../component/footer';
import LogoHero from './logoHero';
import OppoScroll from './oppoScroll';
export default function MainPage() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef(null);
  const isVisible5 = useIsVisible(ref5);

  const ref6 = useRef(null);
  const isVisible6 = useIsVisible(ref6);

  useEffect(() => {
    console.log(isVisible2);
  }, [isVisible2]);

  return (
    <>
      <div id="container1" className={`w-full h-screen text-center relative `}>
        <div
          id="layout1"
          className="absolute inset-0  flex justify-center items-center "
        >
          <div id="background1" ref={ref1} className={`w-full `} />
          <div
            className={`fixed transition-all duration-500 px-10 ease-in  ${
              isVisible1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="font-bold text-4xl">Ignite Data Ownership</div>
            <div className="font-medium text-lg">
              Take Control of Your Data Ownership
            </div>
          </div>
        </div>
      </div>

      <div
        id="container2"
        className={`w-full h-screen text-center relative overflow-visible`}
      >
        <div
          id="layout2"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background2" ref={ref2} className={`w-full h-20`} />
          <div
            className={`fixed z-50 top-1/2  flex justify-center items-center transition-all ease-in duration-500 px-10 delay-100 ${
              isVisible2
                ? 'opacity-100 -translate-y-1/2 '
                : 'opacity-0 translate-y-0'
            }
              `}
          >
            <div className="font-bold text-2xl text-black overflow-hidden">
              We lead the revolutionary change in personal data ownership for
              you
            </div>
          </div>
        </div>
      </div>
      <div
        id="container3"
        className={`w-full h-screen text-center relative overflow-visible`}
      >
        <div
          id="layout3"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div id="background3" ref={ref3} className={`w-full h-20`} />
          <div
            className={`fixed z-50 top-1/2  flex justify-center items-center transition-all ease-in duration-500 px-10 delay-100 ${
              isVisible3
                ? 'opacity-100 -translate-y-1/2 '
                : 'opacity-0 translate-y-0'
            }
              `}
          >
            <div className="font-bold text-2xl text-black overflow-hidden">
              Shape the future of data ownership and join us in a more secure
              and person-centric digital world
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-1/2 bg-white relative z-50'>
        <OppoScroll/>
      </div>

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
            <LogoHero />
          </div>
        </div>
      </div>

      {/* <div id="logohero">
        <div id="layout4" className="flex justify-center items-center"></div>
      </div> */}

      <div id="footer">
        <div id="layout5" className="flex justify-center items-center bg-opacity-50 relative">
          <Footer />
        </div>
      </div>
    </>
  );
}
