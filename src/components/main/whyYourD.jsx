import data from "../../assets/icon/data_icon.png";
import global from "../../assets/icon/global_icon.png";
import law from "../../assets/icon/law_icon.png";
import onboarding from "../../assets/icon/onboarding_icon.png";
import secure from "../../assets/icon/secure_icon.png";
import analysis from "../../assets/icon/analysis_icon.png";

export default function WhyYourD() {
  return (
    <div className="flex flex-col gap-4 mt-52 py-20 justify-center ">
      <div className="font-pre-extrabold text-xl sm:text-[44px]  font-bold flex text-center itmes-center justify-center mb-10 sm:mb-20">
        Why Your<span className="text-maincolor">D</span>?
      </div>
        <div className="grid grid-cols-6 items-start justify-center sm:gap-5 gap-10">
          {whyFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col hover:scale-105 duration-200 transform transition-transform col-span-3 md:col-span-2  text-center min-h-[220px] sm:min-h-[280px]"
            >
              <div className="flex justify-center items-center ">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="sm:w-[80px] sm:y-[80px] md:w-[120px] md:y-[120px]  object-contain bg-white sm:p-5 md:p-10 rounded-full "
                />
              </div>
              <div className="font-bold font-pre-bold text-lg md:text-2xl leading-5 mt-6 mb-2 md:mb-0 md:min-h-[60px]">
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
    img: data,
    title: "Enhanced User Onboarding",
    text: "Makes it easy for users to sign up and sign in to your web services",
  },
  {
    img: global,
    title: "User Analytics ",
    text: "Gain valuable insights with advanced user analytics tools",
  },
  {
    img: law,
    title: "Data Protection Law Compliant",
    text: "Ensures compliance with international data protection Laws, safeguarding user data privacy",
  },
  {
    img: onboarding,
    title: "Privacy Protection",
    text: "prioritizes user privacy through data ownership and DID-based security measures",
  },
  {
    img: secure,
    title: "Global Standard",
    text: "Follows international standards for data management and privacy protection",
  },
  {
    img: analysis,
    title: "Data Ownership ",
    text: "Gives users data ownership, empowering them to manage and utilize their personal data",
  },
];
