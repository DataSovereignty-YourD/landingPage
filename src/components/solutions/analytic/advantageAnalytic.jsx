export default function AdvantageAnalytic() {
  return (
    <div className="h-fit w-full flex flex-col relative py-32 justify-between items-center gap-20">
      <div className=" font-pre-bold text-3xl sm:text-[44px] p-2 flex text-center justify-center gradientText">
        Unique Features to Elevate Your Business!
      </div>
      <div className=" grid grid-cols-4 items-start justify-center gap-5">
        {advantageFeatures.map((feature, index) => (
          <div
            key={index}
            className="col-span-4 shadow-all-around sm:col-span-2 hover:scale-105 duration-200 transform transition-transform gap-5 bg-white rounded-[20px] p-3 sm:p-10 h-full grid grid-auto-rows-1fr"
          >
            {/* <img
                  src={feature.img}
                  alt={feature.title}
                  className=" w-[30px] sm:w-[36px] object-contain mb-2"
                /> */}
            <div className="font-pre-bold text-lg md:text-2xl leading-5 items-start justify-start flex">
              {feature.title}
            </div>
            <p className="font-pre-regular font-bold text-sm h-fit sm:text-lg text-gray300">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const advantageFeatures = [
  {
    //   img: data,
    title: "Enhanced security",
    text: "Based on DID technology, YourD Analytics prioritizes the security and privacy of your data. At the same time, it provides transparent and accurate analytical results, ensuring the reliability of your data.",
  },
  {
    //   img: global,
    title: "Serverless indexing",
    text: "Index and analyze users without the need for additional servers. This allows service providers to focus on improving their services without worrying about building infrastructure.",
  },
  {
    //   img: law,
    title: "Intuitive dashboards",
    text: "Intuitive dashboards designed to make it easy for even the least familiar provider to understand and utilize data.",
  },
  {
    //   img: onboarding,
    title: "Comply with international data security laws",
    text: "Comply with international data security laws like GDPR and CCPA so you can safely analyze and utilize user data without legal risk.",
  },
];
