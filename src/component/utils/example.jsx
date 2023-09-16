import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiDollarSign, FiEye, FiPlay, FiSearch } from 'react-icons/fi';
import Eximg from '../assets/img/Dashborad.png';
const Example = () => {
  return (
    <>
      <SwapColumnFeatures />
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === 'l' ? 'flex-end' : 'flex-start',
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-150px',
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === 'l' ? 'flex-start' : 'flex-end',
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return <img src={Eximg}></img>;
};

export default Example;

const features = [
    {
      id: 1,
      callout: 'Secure Login',
      title: 'Fast Auth',
      description:
        'Based on data ownership, Fast Auth enables quick QR logins without sharing personal information with corporations.',
      contentPosition: 'r',
    },
    {
      id: 2,
      callout: 'Take Control',
      title: 'Data Wallet',
      description:
        'Establishing data ownership allows you to control and buy and sell data yourself.',
      contentPosition: 'l',
    },
    {
      id: 3,
      callout: 'Safe and Sound',
      title: 'Data Selling',
      description:
        'With high-level security technology, it securely protects personal information, enabling you to use it with peace of mind for various purposes.',
      contentPosition: 'r',
    },
  ];
  