import DataSelling from "../assets/img/dataSelling.png";
import YourDSaaS from "../assets/img/dataPass.png";
import FastAuth from "../assets/img/fastAuth.png";
import React, { useState } from "react";

export default function DetailProductPage() {
  const sections = [
    {
      id: 1,
      title: "Prove",
      image: FastAuth,
      description1:
        " The Prove step represents the process of verifying and authenticating a user's identity, where YourD provides a secure and convenient authentication experience for the user.",
      description2: " Throughout this process, the following core features.",
      cards: [
        {
          id: 1,
          title: "YourD DID SDK",
          description:
            "Create and manage a DID, a user's unique digital identity.",
        },
        {
          id: 2,
          title: "YourD Login",
          description:
            "Responsible for quick and easy user logins across various web and apps. Enables users to quickly and securely log in to services with a QR without a password.",
        },
        {
          id: 3,
          title: " YourD Pass",
          description:
            "Keeps your users' data safe and secure. Can be thought of as a user's data wallet. Available on both mobile and desktop platforms. This means users can easily manage and own their valuable data anytime, anywhere.",
        },
      ],
    },
    {
      id: 2,
      title: "Own",
      image: YourDSaaS,
      description1:
        "The Own phase is the concept that users own their data and personal information after proving their identity.",
        description2: "YourD empowers users with data sovereignty through the following key features",
      cards: [
        {
          id: 1,
          title: "YourD Pass",
          description:
            "Keeps your users' data safe and secure. Can be thought of as a user's data wallet. Available on both mobile and desktop platforms. This means users can easily manage and own their valuable data anytime, anywhere.",
        },
      ],
    },
    {
      id: 3,
      title: "Apply",
      image: DataSelling,
      description1:
        "The Apply phase is the process of securely managing and utilizing your own data through the data sovereignty given to you by YourD.",
        description2:' The key features YourD provides during this phase are as follows.',
      cards: [
        {
          id: 1,
          title: "YourD Analytics",
          description:
            "A user analytics service that emphasizes user data ion, effectively performing data analysis while complying gulations such as GDPR.",
        },
        {
          id: 2,
          title: "DIDNS (DID Naming Service)",
          description:
            "A centrally managed DID naming service for enterprises. Authorized DApps can issue and register DIDs to help users easily find and access their services.",
        },
        {
          id: 3,
          title: "Data Selling",
          description:
            "Based on data ownership, YourD provides a foundation for people to sell their data when needed, such as in the AI, advertising, finance, and health sectors, thus enabling data markets and respecting ownership.",
        },
      ],
    },
  ];

  return (
    <div className=" w-full backdrop-blur-sm relative flex flex-col font-sf-pro-text">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className=" w-full px-[12.5%] h-screen border-y-2 flex flex-col justify-center "
        >
          <div className="font-bold text-4xl text-[#fccc00] w-full text-center">
            {section.title}
          </div>

          <div className="flex flex-row gap-5 py-20 px-[10%]">
            <img
              src={section.image}
              className="items-center justify-center flex w-[340px]"
              alt={section.title}
            />
            <div className="flex flex-col  items-start justify-center p-4">
              <div className="text-2xl  font-normal flex  backdrop-blur-sm">
                {section.description1}
              </div>
              {/* <div className="text-lg font-normal  text-gray-300 backdrop-blur-sm">
                {section.description2}
              </div> */}
            </div>
          </div>
          <div className=" p-6 bg-slate-100 rounded-sm">
            <div className="w-full text-center text-2xl font-bold mb-5 text-black/50 "> Key features</div>
            <div className="text-xl font-semibold flex gap-5 justify-between flex-row">
              {section.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white backdrop-blur-sm p-4 rounded-md w-full flex flex-col justify-start gap-4 pt-4 pb-20"
                >
                  <div className="text-black text-center text-2xl font-bold items-start justify-center flex">
                    {card.title}
                  </div>
                  <div className="text-lg font-normal text-gray-500 ">
                    {card.description}
                  </div>
                  <div className="flex items-center justify-center w-full absolute bottom-4 left-0 right-0">
                    <button className="p-2 font-normal bg-[#fccc00] rounded-sm text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
