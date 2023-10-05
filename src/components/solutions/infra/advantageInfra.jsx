export default function AdvantageInfra() {
  return (
    <div className=" h-[1200px] w-full relative items-center justify-center  flex flex-col bg-white bg-opacity-70">
      <div className=" font-bold text-[56px] flex text-center justify-center gradientText">
        YourD Data Infra Unlocking the Power of Web 3.0
      </div>
      <div className=" grid grid-cols-6 items-start justify-center mt-24">
        {advantageFeatures.map((feature, index) => (
          <div
            key={index}
            className=" features hover:scale-105 duration-200 transform transition-transform  col-span-3 sm:col-span-2 m-2 sm:m-3 items-center justify-center flex flex-col  min-h-[220px] sm:min-h-[280px] bg-white drop-shadow-xl p-3 sm:p-4 "
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
    title: "Trusted data pipelines:",
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
