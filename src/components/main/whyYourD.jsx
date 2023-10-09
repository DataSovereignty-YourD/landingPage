import data from "../../assets/icon/dataownership.png";
import global from "../../assets/icon/globalStandard.png";
import law from "../../assets/icon/lawIcon.png";
import onboarding from "../../assets/icon/onboarding.png";
import privacy from "../../assets/icon/privacy.png";
import userAnalytics from "../../assets/icon/userAnalytics.png";

export default function WhyYourD() {
  return (
    <div className="flex flex-col gap-4 mt-52 py-20 justify-center ">
      <div className="font-pre-extrabold text-xl sm:text-[44px] flex text-center itmes-center justify-center mb-10 sm:mb-20">
        Why Your<span className="text-maincolor">D</span>?
      </div>
        <div className="grid grid-cols-6 items-start justify-center sm:gap-5 gap-10">
          {whyFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col hover:scale-105 duration-200 transform transition-transform col-span-3 md:col-span-2  text-center min-h-[220px] sm:min-h-[280px]"
            >
              <div className="flex mx-auto justify-center items-center  sm:w-[60px] sm:y-[60px] md:w-[80px] md:y-[80px]  sm:p-5 md:p-10 rounded-full bg-white ">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="absolute  object-contain w-[24px] y-[24px] md:w-[36px] md:y-[36px]"
                />
              </div>
              <div className="font-pre-bold text-lg md:text-2xl leading-5 mt-6 mb-2 md:mb-0 md:min-h-[60px]">
                {feature.title}
              </div>
              <p className="text-sm h-fit sm:text-lg text-gray300">{feature.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const whyFeatures = [
  {
    img: onboarding,
    title: "Enhanced User Onboarding",
    text: "Makes it easy for users to sign up and sign in to your web services",
  },
  {
    img: userAnalytics,
    title: "User Analytics ",
    text: "Gain valuable insights with advanced user analytics tools",
  },
  {
    img: law,
    title: "Data Protection Law Compliant",
    text: "Ensures compliance with international data protection Laws, safeguarding user data privacy",
  },
  {
    img: privacy,
    title: "Privacy Protection",
    text: "prioritizes user privacy through data ownership and DID-based security measures",
  },
  {
    img: global,
    title: "Global Standard",
    text: "Follows international standards for data management and privacy protection",
  },
  {
    img: data,
    title: "Data Ownership ",
    text: "Gives users data ownership, empowering them to manage and utilize their personal data",
  },
];
