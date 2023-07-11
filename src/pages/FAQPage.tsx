import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: FAQ[] = [
  {
    question: "What is DID?",
    answer:
      "DID stands for Decentralized Identifier. It enables the holder to prove control over it, is globally unique, resolvable, and cryptographically verifiable. DIDs are used in decentralized systems and managed via blockchain technology. Users have full control over their personal data and can authenticate themselves securely without relying on centralized authorities or databases.",
  },
  {
    question: "What is ZKP?",
    answer:
      "A Zero-Knowledge Proof or ZKP is a cryptographic principle where one party (the prover) can prove to another party (the verifier) that they know a value of a specific piece of information without conveying any information apart from the fact that they know the value. In other words, it's a method by which one party can prove that they know certain information without revealing that information itself or any additional information. It is a key technology used in preserving privacy in many cryptographic systems and protocols.",
  },
  {
    question: "How did we implement Fast Auth?",
    answer:
      "We have implemented our proprietary Decentralized Identifier (DID) in alignment with the W3C standards and have successfully completed its specification registration. This DID enables users to safeguard their data independently, facilitating personal ownership. Our technology has made Fast Auth possible by allowing direct authentication, eliminating the need for verifying personal information through multiple company databases.",
  },

  // Add more FAQs as needed
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div id="FAQ" className="px-12 my-40">
      <div className=" text-4xl  font-[font-sf-pro-text-bold] font-bold sm:text-center text-custom-blue mb-4">
        FAQs
      </div>

      {FAQs.map((faq, index) => (
        <div
          className=" border-b-2 p-2 mb-4 w-full my-2 sm:my-4 md:my-6 md:w-3/4 lg:w-2/3  mx-auto h-fit"
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
        >
          <p className="font-bold font-[font-sf-pro-text-bold] text-xl sm:text-2xl lg:text-3xl justify-between flex flex-row cursor-pointer">
            {faq.question}
            <svg className="fill-current text-custom-blue h-6 w-6 transform transition-transform duration-500">
              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
            </svg>
          </p>
          <div
            className={`border-l-2 border-custom-blue px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
              index === activeIndex ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="text-sm sm:text-lg lg:text-xl font-[font-sf-pro-text] leading-normal">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
