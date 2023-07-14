import React, { useEffect, useRef } from "react";
import Apply from "../assets/img/apply.png";
import Prove from "../assets/img/prove.png";
import Own from "../assets/img/own.png";
export function ControlPage() {
  const contents = [
    {
      title: "Prove",
      description:
        "In order to ensure that only the owner has access to and can use the data, and that unauthorized access is prevented, it is necessary to establish ownership of the data and prove that it belongs to oneself.",
      image: Prove,
    },
    {
      title: "Own",
      description:
        "A solution for data ownership is needed. Traditionally, companies held data associated with individuals, but with YourD, individuals can now have ownership of their own data through the use of DIDs (Decentralized Identifiers), even without relying on corporate entities.",
      image: Own,
    },
    {
      title: "Apply",
      description:
        "It is not just about owning and proving ownership of data, but also about leveraging one's own data to create added value. Moreover, since revenue generation is based on utilizing data, security becomes even more critical. YourD addresses this challenge by implementing Zero-Knowledge Proofs (ZKPs).",
      image: Apply,
    },
  ];
  return (
    <div
      id="Solution"
      className="w-full flex flex-col px-12 pt-32 lg:px-32 md:px-20 sm:px-10 h-min-screen   justify-around "
    >
      <div className="w-full pt-10 pb-40">
        <div
          id="title"
          className="text-4xl sm:text-5xl md:text-5xl w-full mx-auto font-[sf-pro-text-bold] text-center sm:p-5 mb-10 text-custom-blue"
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

      <div id="list" className="px-0 xl:px-20 grid w-full mb-5 sm:grid-cols-3 ">
        {contents.map((item, index) => {
          return (
            <div
              key={index}
              className="px-3 py-5 sm:py-0 xl:px-10 w-full h-full justify-center flex flex-col sm:flex-row mx-auto font-bold font-[font-sf-pro-text-bold]"
            >
              <div className="contentsbox w-full  rounded-xl bg-white border-color-2 border-2 p-6 text-center hover:border-custom-blue">
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
