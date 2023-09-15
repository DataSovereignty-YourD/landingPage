import React, { useState } from "react";

export default function NoVideoPage() {
  const videos = [
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      caption: "Data Wallet",
      Title: "Data wallet that enables users to easily manage your data  ",
      describe:
        "Manage your digital assets and personal information seamlessly through the YourD service.",
      Fir_title: "NFT & Token",
      Fir_des:
        "You can easily explore and manage your existing digital assets such as NFTs and tokens through the YourD service.",
      Sec_title: "Credential",
      Sec_des:
        "Using the credentials provided by yourD, it is possible to analyze your data and categorize it into different categories. Furthermore, statistics can be provided to understand how your data is being used and what types of data exist. ",
      Third_title: "DID",
      Third_des:
        "Our self-developed Decentralized Identifier (DID) has successfully undergone the registration process with the World Wide Web Consortium (W3C). This recognition from W3C signifies that our DID implementation meets the established standards and guidelines for interoperability and security in decentralized identity systems.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      id="Solution"
      className="overflow-hidden bg-white px-24 lg:px-40 py-24 sm:py-32"
    >
      <h2 className="text-base sm:text-xl lg:text-2xl  font-sf-pro-text font-semibold leading-7 text-custom-blue">
        {videos[activeIndex].caption}
      </h2>
      <p className="mt-2 text-xl sm:text-4xl lg:text-6xl font-sf-pro-text font-bold tracking-tight text-gray-900 ">
        {videos[activeIndex].Title}
      </p>
      <p className="mt-6 text-sm sm:text-xl lg:text-2xl  leading-8 text-gray-600">
        {videos[activeIndex].describe}
      </p>
      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        <div className="relative pl-9">
          <dt className="inline  text-xl sm:text-2xl lg:text-3xl  font-sf-pro-text font-semibold text-gray-900">
            {videos[activeIndex].Fir_title}
          </dt>
          <br></br>
          <dd className="inline  sm:text-xl lg:text-2xl  font-sf-pro-text">
            {videos[activeIndex].Fir_des}
          </dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline  text-xl sm:text-2xl lg:text-3xl font-sf-pro-text font-semibold text-gray-900">
            {videos[activeIndex].Sec_title}
          </dt>
          <br></br>
          <dd className="inline sm:text-xl lg:text-2xl font-sf-pro-text">
            {videos[activeIndex].Sec_des}
          </dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline text-xl sm:text-2xl lg:text-3xl font-sf-pro-text font-semibold text-gray-900">
            {videos[activeIndex].Third_title}
          </dt>
          <br></br>
          <dd className="inline sm:text-xl lg:text-2xl font-sf-pro-text">
            {videos[activeIndex].Third_des}
          </dd>
        </div>
      </dl>
    </div>
  );
}
