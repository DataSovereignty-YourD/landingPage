import React, { useState } from "react";
export default function DetailPage() {
  const videos = [
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      caption: "Data Wallet",
      Title:
        "Data wallet wallet that enables users to easily manage your data  ",
      describe: "",
      Fir_title: "NFT",
      Fir_des: "NFT를 간단하게 거래할 수 있다. ",
      Sec_title: "Token",
      Sec_des: "Token 거래를 ",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      caption: "Fast Auth",
      Title: "",
      describe:
        "nft, token 거래를 지원하는 지갑을 한번에 제공, credentials 은 각자에게 보냄",
      Fir_title: "NFT",
      Fir_des: "NFT를 간단하게 거래할 수 있다. ",
      Sec_title: "Token",
      Sec_des: "Token 거래를 ",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      caption: "Data Selling",
      Title: "",
      describe:
        "nft, token 거래를 지원하는 지갑을 한번에 제공, credentials 은 각자에게 보냄",
      Fir_title: "NFT",
      Fir_des: "NFT를 간단하게 거래할 수 있다. ",
      Sec_title: "Token",
      Sec_des: "Token 거래를 ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div  className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="relative flex flex-col justify-center">
            <div className="w-full h-full mb-4 justify-center">
              <video
                className="w-full h-auto"
                src={videos[activeIndex].src}
                autoPlay
                loop
                muted
              />
            </div>
            <div className="flex justify-center">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-4 h-4 mx-2 rounded-full ${
                    index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-center mt-2">
              <p className="text-sm text-custom-blue font-sf-pro-text font-semibold">
                {videos[activeIndex].caption}
              </p>
            </div>
          </div>
          {/* video link is upper */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base  font-sf-pro-text font-semibold leading-7 text-custom-blue">
                {videos[activeIndex].caption}
              </h2>
              <p className="mt-2 text-xl font-sf-pro-text font-bold tracking-tight text-gray-900 sm:text-4xl">
                {videos[activeIndex].Title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {videos[activeIndex].describe}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-sf-pro-text font-semibold text-gray-900">
                    {videos[activeIndex].Fir_title}
                  </dt>
                  <br></br>
                  <dd className="inline font-sf-pro-text">
                    {videos[activeIndex].Fir_des}
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-sf-pro-text font-semibold text-gray-900">
                    {videos[activeIndex].Sec_title}
                  </dt>
                  <br></br>
                  <dd className="inline font-sf-pro-text">
                    {videos[activeIndex].Sec_des}
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-sf-pro-text font-semibold text-gray-900">
                    Database backups.
                  </dt>
                  <dd className="inline font-sf-pro-text">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
