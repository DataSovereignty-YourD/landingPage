import React, { useState } from "react";

const CarouselExample = () => {
  const videos = [
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      caption: "Data Wallet",
      Title: "Data Wallet",
      describe: "Data Wallet is good",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      caption: "Fast Auth",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      caption: "Data Selling",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
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
  );
};

export default CarouselExample;
