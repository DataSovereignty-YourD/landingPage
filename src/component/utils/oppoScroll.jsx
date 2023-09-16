import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import eximg from '../../assets/img/Dashborad.png';
const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <section ref={targetRef} className="flex  bg-black text-white relative z-50">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
    </>
  );
};

const Content = ({ content }) => {
  return (
    <div className="w-full ">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-20 h-screen flex flex-col justify-center gap-10 ${
            idx % 2 ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="font-light w-full max-w-md">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, '0vh']
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};
export default OppoScroll;

const items = [
  {
    id: 1,
    title: 'Fast Auth',
    description:
      'Based on data ownership, Fast Auth enables quick QR logins without sharing personal information with corporations.',
    img: eximg,
  },
  {
    id: 2,
    title: 'Data Wallet',
    description:
      'Establishing data ownership allows you to control and buy and sell data yourself.',
      img: eximg,
  },
  {
    id: 3,
    title: 'Data Selling',
    description:
      'With high-level security technology, it securely protects personal information, enabling you to use it with peace of mind for various purposes.',
      img: eximg,
  },
  // {
  //   id: 4,
  //   title: 'White shoes with black heel',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  //   img: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80',
  // },
];
