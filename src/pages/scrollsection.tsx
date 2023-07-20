import { useRef, ReactNode } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import FirstPage from "./FirstPage";
import { ControlPage } from "./controlPage";
import YourDIntroPage from "./yourdIntroPage";
import RoadMapPage from "./roadmapPage";
import FAQPage from "./FAQPage";
type ScrollableContainerProps = {
  children: ReactNode[];
};

const ScrollableContainer = ({ children }: ScrollableContainerProps) => {
  const { scrollYProgress } = useScroll();

  const transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(children.length - 1) * 100]
  );

  return (
    <motion.div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <motion.div style={{ y: transformValue }} className="flex flex-col">
        {children.map((child, index) => (
          <motion.div
            key={index}
            style={{
              scrollSnapAlign: "start",
            }}
            className=" h-full md:h-screen"
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export function ScrollSection() {
  return (
    <ScrollableContainer>
      <FirstPage />
      <ControlPage />
      <YourDIntroPage />
      <RoadMapPage />
      <FAQPage />
    </ScrollableContainer>
  );
}
