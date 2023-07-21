import React, { useEffect, useRef } from "react";
import Apply from "../assets/img/apply.png";
import Prove from "../assets/img/prove.png";
import Own from "../assets/img/own.png";
export function ControlPage() {
  const contents = [
    {
      title: "Prove",
      description:
        "To secure data and prevent unauthorized access, ownership must be established and proven, ensuring only the rightful owner can access and utilize it.",
      image: Prove,
    },
    {
      title: "Own",
      description:
        "YourD enables data ownership through DIDs, giving individuals full control. Empowering you, not corporations.",
      image: Own,
    },
    {
      title: "Apply",
      description:
        "YourD leverages personal data to create value with a revenue model based on data utilization. Zero-Knowledge Proofs (ZKPs) ensure data privacy and security.",
      image: Apply,
    },
  ];
  return (
    <div
      id="Solution"
      className="w-full  h-full  flex flex-col px-12 py-10  lg:px-32 md:px-20 sm:px-10 h-min-screen   justify-around "
    >
      <div className="w-full pt-10 pb-10">
        <div
          id="title"
          className="text-4xl sm:text-5xl md:text-5xl w-full mx-auto font-[sf-pro-text-bold] sm:text-center sm:p-5 mb-10 text-maincolor"
        >
          3-Problem
        </div>

        <div id="description">
          <div className="text-xl sm:text-xl md:text-2xl w-fit mx-auto font-[sf-pro-text] text-gray-500 sm:text-center">
            In order to manage data effectively, 3 key challenges need to be
            addressed. <br></br>Resolving these challenges is crucial for
            maximizing the value of data and ensuring its secure protection.
          </div>
        </div>
      </div>

      <div id="list" className="px-0 xl:px-10 grid w-full mb-5 sm:grid-cols-3 ">
        {contents.map((item, index) => {
          return (
            <div
              key={index}
              className="px-3 py-5 sm:py-0 xl:px-10 w-full h-full justify-center flex flex-col sm:flex-row mx-auto font-bold font-[font-sf-pro-text-bold]"
            >
              <div className="contentsbox w-full  rounded-xl bg-white border-color-2 border-2 p-6 text-center hover:border-maincolor">
                <div className="Icon rounded-full overflow-hidden mx-auto w-20 h-20 bg-color-2 items-center">
                  <img src={item.image} className="p-5"></img>
                </div>
                <div className=" mx-auto  flex  flex-col">
                  <span className="text-3xl xl:text-5xl  text-black my-5">
                    {item.title}
                  </span>
                  <span className="flex-wrap mx-auto  overflow-hidden  font-medium  text-lg sm:text-sm  xl:text-lg text-left">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* {} */}
    </div>
  );
}
