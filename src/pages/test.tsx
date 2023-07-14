import React, { useEffect, useRef } from "react";

const TestPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 요소의 50% 이상이 화면에 보일 때 콜백이 호출됩니다.
    };

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("요소가 화면에 나타났습니다!");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // 컴포넌트가 언마운트될 때 Intersection Observer를 해제합니다.
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen align-middle my-auto">
      <div className=" mt-10 text-center text-color-1 font-semibold font-[font-sf-pro-text-semi-bold]">
        OUR SERVICE
      </div>
      <div className="my-10 text-5xl text-center font-bold font-[font-sf-pro-text-bold]">
        Benefit
        {/* <img
      className="w-36 mx-auto"
      src="https://i0.wp.com/myabcwallet.io/wp-content/uploads/2022/07/line_Asset-5.png?w=1600&ssl=1"
    ></img> */}
      </div>

      <div
        ref={targetRef}
        className=" w-full h-full justify-between flex felx-row mx-auto font-bold font-[font-sf-pro-text-bold]"
      >
        <div className="contentsbox w-1/3 h-2/3 mx-5 rounded-xl bg-white border-color-2 border-2 p-10 text-center hover:border-color-1">
          <div className="Icon rounded-full mx-auto w-20 h-20 bg-color-2 items-center"></div>
          <div className=" mx-auto w-full flex  flex-col">
            <span className="text-5xl  text-black my-5">Prove</span>
            <span className="mx-auto h-fit over-flow-hidden font-medium text-lg text-left">
              prove desprove desprove desprove desprove desprove desprove
              desprove desprove desprove desprove desprove desprove desprove
              desprove desprove desprove desprove desprove desprove desprove
            </span>
          </div>
        </div>
        <div className="contentsbox w-1/3 h-2/3 mx-5 rounded-xl bg-white border-color-2 border-2 p-10 text-center hover:border-color-1">
          <div className="Icon rounded-full mx-auto w-20 h-20 bg-color-2 items-center"></div>
          <div className="flex flex-wrap flex-col">
            <span className="text-5xl  text-black my-5">Own</span>
            <span className=" font-medium text-lg">prove</span>
          </div>
        </div>
        <div className="contentsbox w-1/3 h-2/3 mx-5 rounded-xl bg-white border-color-2 border-2 p-10 text-center hover:border-color-1">
          <div className="Icon rounded-full mx-auto w-20 h-20 bg-color-2 items-center"></div>
          <div className="flex flex-wrap flex-col">
            <span className="text-5xl  text-black my-5">Apply</span>
            <span className=" font-medium text-lg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
