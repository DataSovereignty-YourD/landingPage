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
          key={index}
          className=" border-b-2 p-2 mb-4 w-full md:w-3/4 lg:w-2/3  mx-auto transition-all duration-200 ease-in h-fit"
        >
          <p
            className="font-bold font-[font-sf-pro-text-bold] text-xl sm:text-2xl lg:text-3xl "
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {faq.question}
          </p>
          {index === activeIndex && (
            <p className="mt-4 text-sm sm:text-lg lg:text-xl font-[font-sf-pro-text] leading-normal">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
