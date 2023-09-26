import DataSelling from "../assets/img/dataSelling.png";
import YourDSaaS from "../assets/img/dataPass.png";
import FastAuth from "../assets/img/fastAuth.png";
import React, { useState } from "react";

export default function DetailProductPage() {
  const sections = [
    {
      id:1,
      title: "Prove",
      image: FastAuth,
      description:
        " The Prove step represents the process of verifying and authenticating a user's identity, where YourD provides a secure and convenient authentication experience for the user. Throughout this process, the following core features provide a convenient authentication experience while strongly protecting the user's identity and privacy.",
      cards: [
        {
          id:1,
          title: "YourD DID SDK",
          description:
            "Create and manage a DID, a user's unique digital identity.",
        },
        {
          id:2,
          title: "YourD Login",
          description:
            "Responsible for quick and easy user logins across various web and apps. Enables users to quickly and securely log in to services with a QR without a password.",
        },
        {
          id:3,
          title: " YourD Pass",
          description:
            "Keeps your users' data safe and secure. Can be thought of as a user's data wallet. Available on both mobile and desktop platforms. This means users can easily manage and own their valuable data anytime, anywhere.",
        },
      ],
    },
    {
      id:2,
      title: "Own",
      image: YourDSaaS,
      description:
        " The Own stage is the concept of users owning their data and personal information. We keep your data and personal information secure and under control, giving you data sovereignty through the following key features",
      cards: [
        {
          id:1,
          title: "YourD Pass",
          description:
            "Keeps your users' data safe and secure. Can be thought of as a user's data wallet. Available on both mobile and desktop platforms. This means users can easily manage and own their valuable data anytime, anywhere.",
        },
      ],
    },
    {
      id:3,
      title: "Apply",
      image: DataSelling,
      description:
        "The Apply stage represents the process of actually using YourD's features to leverage data sovereignty. At this stage, users can securely manage and utilize their data and effectively apply data sovereignty across a variety of services. The core features YourD offers include",
      cards: [
        {
          id:1,
          title: "YourD Analytics",
          description:
            "A user analytics service that emphasizes user data ion, effectively performing data analysis while complying gulations such as GDPR.",
        },
        {
          id:2,
          title: "DIDNS (DID Naming Service)",
          description:
            "A centrally managed DID naming service for enterprises. Authorized DApps can issue and register DIDs to help users easily find and access their services.",
        },
        {
          id:3,
          title: "Data Selling",
          description:
            "Based on data ownership, YourD provides a foundation for people to sell their data when needed, such as in the AI, advertising, finance, and health sectors, thus enabling data markets and respecting ownership.",
        },
      ],
    },
  ];

  return (
    <div className=" w-full py-20 bg-white relative border-y-2 flex flex-col font-sf-pro-text">
      <div className="w-3/4 mx-auto">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="rounded-xl flex flex-col w-full gap-24 mt-48"
          >
            <div className="flex justify-between text-4xl py-5 font-bold border-b-2">
              {["Prove", "Own", "Apply"].map((title, titleIndex) => (
                <div
                  key={titleIndex}
                  className={
                    title === section.title ? "text-[#fccc00]" : "text-[#d8d8d8]"
                  }
                >
                  {title}
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-5">
              <img
                src={section.image}
                className="items-center justify-center flex w-[340px]"
                alt=""
              />
              <div className="text-2xl  font-normal flex items-center justify-center p-4 backdrop-blur-sm">
                {section.description}
              </div>
            </div>
            <div className="text-xl font-semibold flex gap-5 justify-between flex-row">
              {section.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-slate-50 backdrop-blur-sm p-4 rounded-md w-full flex flex-col justify-start gap-4 pt-4 pb-14"
                >
                  <div className="text-black text-center text-2xl font-bold items-start justify-center flex">
                    {card.title}
                  </div>
                  <div className="text-lg font-normal text-gray-500">{card.description}</div>
                  <div className="flex items-center justify-center w-full absolute bottom-4 left-0 right-0">
                    <button className="p-1 font-normal bg-yellow-100 text-sm">
                      ...Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
