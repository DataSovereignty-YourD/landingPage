import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiDollarSign, FiEye, FiPlay, FiSearch } from 'react-icons/fi';
import LoactionPayment from '../../../assets/img/locationPayment.png';
import ModulePayment from '../../../assets/img/paymentModule.png';
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
      <div className="grid h-full w-full place-content-center px-8 py-12 md:w-2/5 md:px-8 md:py-8 ">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="mt-4"
        >
          <div className="my-3 text-5xl font-bold">{featureInView.title}</div>

          <div className="text-slate-600 text-2xl">
            {featureInView.description}
          </div>
          <div className="text-slate-600 text-2xl mt-2">
            {featureInView.description2}
          </div>
          <div className="text-slate-600 text-2xl mt-2">
            {featureInView.description3}
          </div>
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
  return (
    <div className="relative">
      <img
        src={featureInView.Img}
        className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[auto] "
        alt="Feature visual"
      />
    </div>
  );
};

export default Example;

const features = [
  {
    id: 1,
    callout: 'Get noticed',
    title: 'Without location restrictions',
    description:
      'We provide a universal payment solution that can be used in both the real world and virtual space.',
    description2: 'Pay easily from anywhere.',
    description3:
      "Design complex crypto payment systems easily so users don't need to know anything technical.",
    contentPosition: 'r',
    Img: LoactionPayment,
  },
  {
    id: 2,
    callout: 'Find people',
    title: 'Payment module provided',
    description:
      'Easily integrate into your business with an efficient and powerful payment module.',
    description2:
      'Experience continuous innovation by responding to new payment trends through user-oriented design and ease of upgrade.',
    contentPosition: 'l',
    Img: ModulePayment,
  },
];
