export default function AdvantageInfra() {
  return (
    <div className="h-fit w-full flex flex-col relative py-32 justify-between items-center gap-20">
      <div className="font-pre-bold text-3xl sm:text-[44px] p-2 flex text-center justify-center gradientText">
        YourD Data Infra Unlocking the Power of Web 3.0
      </div>
      <div className=" grid grid-cols-4 items-start justify-center gap-5">
        {advantageFeatures.map((feature, index) => (
          <div
            key={index}
            className={`col-span-4 shadow-all-around sm:col-span-2 hover:scale-105 duration-200 transform transition-transform gap-5 bg-white rounded-[20px] p-3 sm:p-10 h-full grid grid-auto-rows-1fr`}
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
    title: "Trusted data pipelines",
    text: "Provide a trusted data pipeline that transparently and securely enables data exchange between organizations and users.",
  },
  {
    //   img: global,
    title: "Utilize zero-knowledge proofs",
    text: "Increase the security and trustworthiness of your data with zero-knowledge proof technology that can prove its validity without directly disclosing your data",
  },
  {
    //   img: law,
    title: "User-centered data model",
    text: "Reflecting the direction of Web 3.0, YourD aims for a user-centered data model. This enables users' data privacy and value creation at the same time.",
  },
  {
    //   img: onboarding,
    title: "New business opportunities in Web 3.0",
    text: "YourD provides a platform for businesses and users who want to explore new business models and opportunities in the Web 3.0 environment.",
  },
  {
    //   img: secure,
    title: "Enhance data security",
    text: "Protect your users' data from a variety of security threats, including intellectual property infringement, data integrity issues, data duplication, and more.",
  },
];
