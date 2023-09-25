import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Link } from "react-router-dom";
import { fetchData } from "../test/testData";
import img from "../../src/assets/img/dataPass.png";

const CARD_WIDTH = 320;
const CARD_HEIGHT = 320;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogCard = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const displayData = fetchData.slice(0, 10);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (displayData.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="bg-white backdrop-blur-sm mt-20 z-30 w-screen  relative font-sf-pro-text"
      ref={ref}
    >
      <div className="w-full relative overflow-hidden">
        {/* CARDS */}
        <div className=" w-full">
          <div className=" flex justify-between items-center mb-6 mx-[15%]">
            <p className=" text-xl sm:text-2xl font-semibold">
              Your
              <span className=" text-yellow-300 font-bold text-3xl itmes-center justify-center ">
                D
              </span>{" "}
              News
            </p>
            <Link
              to="/Blog"
              className=" font-semibold text-sm sm:text-lg  p-1 rounded-md  hover:bg-[#fccc00]"
            >
              View All
            </Link>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            className=" flex pl-[15%]"
          >
            {displayData.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className=" absolute left-0 top-[50%] z-30 rounded-r-xl border border-black bg-slate-300/30 p-3 pl-2 text-4xl text-black backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className=" absolute right-0 top-[50%] z-30 rounded-l-xl border border-black bg-slate-300/30 p-3 pr-2 text-4xl text-black backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }) => {
  return (
    <div
      className=" relative shrink-0 cursor-pointer rounded-2xl  bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=" absolute inset-0 z-20 rounded-2xl  text-black transition-[backdrop-filter] hover:backdrop-blur-sm">
        <div className=" w-full h-[200px] ">
          <img
            src={img}
            alt=""
            className=" object-cover h-full w-full bg-white"
          />
        </div>
        <div className="px-3 sm:px-6 bg-gradient-to-b from-gray-300 py-2 via-yellow/80 to-yellow/50 ">
          <p className=" text-xl sm:text-xl font-bold">{title}</p>
          <p className="text-sm sm:text-[16px] text-balck">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
