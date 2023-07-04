import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: FAQ[] = [
  {
    question: "What is DID?",
    answer:
      "DID stands for Decentralized Identifier. It's a new type of identifier that enables the holder to prove control over it and is globally unique, resolvable with high availability, and cryptographically verifiable. DIDs are used in decentralized systems and are managed via blockchain technology, allowing the holder to have full control over their personal data. It doesn't require a centralized registration authority and can be used for any digital interaction. We leveraged Decentralized Identifier (DID) technology, which enables users to have full control over their digital identities. By utilizing DIDs, users can authenticate themselves securely and efficiently without relying on centralized authentication services or multiple external databases.",
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
    <div id="FAQ" className="mx-auto ">
      <h1 className=" text-4xl w-fit mx-auto font-sf-pro-text font-bold text-center text-custom-blue mb-4">
        FAQs
      </h1>
      {FAQs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-4 w-1/2 mx-auto transition-all duration-200 ease-in"
        >
          <p
            className="font-bold font-sf-pro-text  text-2lg"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {faq.question}
          </p>
          {index === activeIndex && (
            <p className="mt-2  font-sf-pro-text ">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
