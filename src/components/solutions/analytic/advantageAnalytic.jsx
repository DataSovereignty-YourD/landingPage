export default function AdvantageAnalytic() {
  return (
    <div className=" h-[1200px] w-full relative items-center justify-center  flex flex-col bg-white bg-opacity-70">
      <div className=" font-bold text-[56px] flex text-center justify-center gradientText">
        Unique Features to Elevate Your Business!
      </div>
      <div className=" grid grid-cols-4 gap-24 px-24 items-start justify-center mt-24">
        {advantageFeatures.map((feature, index) => (
          <div
            key={index}
            className=" features hover:scale-105 duration-200 transform transition-transform  col-span-2 sm:col-span-2 m-2 sm:m-3 items-center justify-center flex flex-col  min-h-[220px] sm:min-h-[280px] bg-white drop-shadow-xl p-3 sm:p-4 "
          >
            {/* <img
                  src={feature.img}
                  alt={feature.title}
                  className=" w-[30px] sm:w-[36px] object-contain mb-2"
                /> */}
            <h3 className=" font-bold text-lg md:text-2xl sm:py-3 leading-5 min-h-[56px] items-center justify-center flex">
              {feature.title}
            </h3>
            <br />
            <p className=" text-sm h-fit sm:text-lg">{feature.text}</p>
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
