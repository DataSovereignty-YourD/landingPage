import React from "react";
import LocationPayment from "../../../assets/img/locationPayment.png";
import ModulePayment from "../../../assets/img/paymentModule.png";
import Example from "./example";
const emphasisSections = [
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
    <div className="h-fit min-h-1/2 w-full flex flex-col relative py-10 sm:py-20 justify-between items-center bg-opacity-70 gap-10 sm:gap-20">
      <div className="sm:text-5xl text-4xl font-bold flex flex-col items-center justify-center">
        <div>
          Your<span className="text-[#fccc00]">D</span>&nbsp;Pay <br />
        </div>
        <span className="gradientText flex items-center justify-center pb-2 text-center mx-auto mt-4">
          A new horizon <br className="sm:hidden" />
          for payments
        </span>
      </div>
      {emphasisSections.map((section, index) => (
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
      ))}
    </div>
  );
}
