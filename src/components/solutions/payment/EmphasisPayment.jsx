import React from "react";
import LocationPayment from "../../../assets/img/locationPayment.png";
import ModulePayment from "../../../assets/img/paymentModule.png";
import Location2 from "../../../assets/img/location2.png";
import Example from "./example";
const EmphasisSections = [
  {
    title: "Without location restrictions",
    content: [
      "We provide a universal payment solution that can be used in both the real world and virtual space.",
      "Pay easily from anywhere.",
      "Design complex crypto payment systems easily so users don't need to know anything technical.",
    ],
    image: LocationPayment,
  },
  {
    title: "Payment module provided",
    content: [
      "Easily integrate into your business with an efficient and powerful payment module.",
      "Experience continuous innovation by responding to new payment trends through user-oriented design and ease of upgrade.",
    ],
    image: ModulePayment,
  },
];

export default function EmphasisPayment() {
  return (
    <div className="h-fit min-h-1/2 w-full flex flex-col relative py-10 sm:py-20 justify-between items-center bg-opacity-70 gap-10 sm:gap-14">
      <div className="sm:text-5xl text-4xl font-pre-bold flex flex-col items-center justify-center">
        <div>
          Your<span className="text-[#fccc00]">D</span>&nbsp;Pay <br />
        </div>
        <span className="gradientText flex items-center  justify-center pb-2 text-center mx-auto mt-4">
          A new horizon <br className="sm:hidden" />
          for payments
        </span>
      </div>
      {/* {emphasisSections.map((section, index) => (
        <div
          key={index}
          className="flex justify-center items-center mx-10 gap-4 w-full bg-white flex-col sm:flex-row"
        >
          <img
            src={section.image}
            alt={`Section ${index + 1}`}
            className="w-full sm:w-3/4 lg:w-2/5 object-contain"
          />
          <div className="text-lg sm:text-xl lg:text-3xl py-10 px-4 sm:w-4/5">
            <span className="text-4xl font-bold">{section.title}</span>

            <div className="sm:mt-12 mt-4 font-pre-light">
              {section.content.map((paragraph, i) => (
                <div key={i} className={i !== 0 ? "mt-2" : ""}>
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))} */}
      <div className="flex flex-col sm:flex-row  sm:px-12 md:px-16 lg:px-12 w-full ">
        <div className=" rounded-xl px-4 my-16 py-4  order-1 sm:order-none items-start justify-center flex flex-col ">
          <div className="text-xl sm:text-3xl md:text-4xl pb-1 font-pre-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Anywhere in the world!
          </div>
          <ul className="mt-10 sm:text-lg font-pre-regular list-disc">
            <li>
              YourD Pay offers an innovative payment solution accessible in both
              the physical and virtual realms.
            </li>

            <li className="mt-4 font-pre-regular">
              Simplify and enhance your daily life with easy payments anytime,
              anywhere.
            </li>
          </ul>
        </div>
        <img
          src={LocationPayment}
          className="w-full sm:w-2/5 lg:w-2/5 object-contain"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-10 sm:px-12 md:px-16 lg:px-12 ">
        <img
          src={ModulePayment}
          className="w-full sm:w-2/5 lg:w-2/5 object-contain"
        />
        <div className="flex sm:gap-28">
          <div className=" rounded-xl px-4 py-4 my-16  items-start justify-center flex flex-col">
            <div className="text-xl sm:text-3xl md:text-4xl font-pre-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 pb-1">
              Payment module provided
            </div>
           <ul className="list-disc">
             <li className="mt-10 sm:text-lg  font-pre-regular">
               Easily integrate into your business with an efficient and powerful
               payment module.
               <li className="mt-4 font-pre-regular">
                 Experience continuous innovation by responding to new payment
                 trends through user-oriented design and ease of upgrade.
               </li>
             </li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
