import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import DataSelling from '../assets/img/dataSelling.png';
import DataPass from '../assets/img/dataPass.png';
import FastAuth from '../assets/img/fastAuth.png';

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
            selected
              ? 'text-yellow-500'
              : 'text-slate-400 group-hover:text-slate-500'
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-yellow-500 md:w-2"
        />
      )}
    </div>
  );
};

const FEATURES = [
  {
    title: 'Fast Auth',
    Feature: () => (
      <ExampleFeature
        text="Based on data ownership, Fast Auth enables rapid QR login without sharing personal information with corporations."
        img={FastAuth}
      />
    ),
  },
  {
    title: 'Data Pass',
    Feature: () => (
      <ExampleFeature text="datapass에 관한 설명" img={DataPass} />
    ),
  },
  {
    title: 'Data Selling',
    Feature: () => (
      <ExampleFeature
        text="Utilizing high-level security technology, we ensure the safe protection of personal information, enabling it to be used confidently for a variety of purposes."
        img={DataSelling}
      />
    ),
  },
];

const ExampleFeature = ({ text, img }) => (
  <div className="w-full relative bg-white bg-opacity-30 border border-red-600">
    <div className="absolute inset-0 "></div>
    {img && <img src={img} alt="feature" className="w-full h-full " />}
    {text && (
      <p className="text-black mt-4 text-center font-semibold text-2xl">
        {text}
      </p>
    )}
  </div>
);
export default function ExplainYourD() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 bg-white px-4 py-12 md:flex-row md:gap-12 md:px-8 b ">
      <AnimatePresence mode="wait">
        {FEATURES.map((tab, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: selected === index ? 1 : 0, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className={`w-full ${selected === index ? '' : 'hidden'}`}
            >
              <tab.Feature />
            </motion.div>
          );
        })}
      </AnimatePresence>
      <Tabs selected={selected} setSelected={setSelected} />
    </section>
  );
}
