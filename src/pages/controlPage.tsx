import React, { useEffect, useRef } from "react";
import Apply from "../assets/img/apply.png";
import Prove from "../assets/img/prove.png";
import Own from "../assets/img/own.png";
export function ControlPage() {
  const contents = [
    {
      title: "Prove",
      description:
        " To secure data and prevent unauthorized access, it is essential to establish and prove ownership, ensuring that only the rightful owner can access and utilize the data.",
      image: Prove,
    },
    {
      title: "Own",
      description:
        "YourD provides a solution for data ownership by enabling individuals to have control over their own data through the use of DIDs. This empowers individuals to assert ownership of their data independent of corporate entities.",
      image: Own,
    },
    {
      title: "Apply",
      description:
        "YourD goes beyond data ownership and focuses on leveraging personal data to create value. With a revenue model based on data utilization, security is of utmost importance. YourD tackles this by implementing Zero-Knowledge Proofs (ZKPs) to ensure data privacy and security.",
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
