import data from "../../assets/icon/data_icon.png";
import global from "../../assets/icon/global_icon.png";
import law from "../../assets/icon/law_icon.png";
import onboarding from "../../assets/icon/onboarding_icon.png";
import secure from "../../assets/icon/secure_icon.png";
import analysis from "../../assets/icon/analysis_icon.png";

export default function WhyYourD() {
  return (
    <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto min-h-[80vh] py-32 relative gap-4  justify-center mt-32">
      <div className="text-xl sm:text-4xl  font-bold flex text-center itmes-center justify-center mb-10 sm:mb-20">
        Why YourD?
      </div>
        <div className="grid grid-cols-6 items-start justify-center">
          {whyFeatures.map((feature, index) => (
            <div
              key={index}
              className="features hover:scale-105 duration-200 transform transition-transform  col-span-3 sm:col-span-2 m-2 sm:m-3   min-h-[220px] sm:min-h-[280px] bg-white border border-dashed border-yellow-100  drop-shadow-xl p-3 sm:p-4 "
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-[30px] sm:w-[36px] object-contain mb-2"
              />
              <h3 className="font-bold text-lg md:text-2xl sm:py-3 leading-5 min-h-[56px]">
                {feature.title}
              </h3>
              <p className="text-sm h-fit sm:text-lg">{feature.text}</p>
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
    text: "Makes it easy for users to sign up and sign in to your web services.",
  },
  {
    img: global,
    title: "User Analytics ",
    text: "Gain valuable insights with advanced user analytics tools",
  },
  {
    img: law,
    title: "GDPR Compliance",
    text: "Ensures compliance with GDPR regulations, safeguarding user data privacy",
  },
  {
    img: onboarding,
    title: "Privacy Protection",
    text: "prioritizes user privacy through data ownership and DID-based security measures",
  },
  {
    img: secure,
    title: "Global Standard",
    text: "Follows international standards for data management and privacy protection.",
  },
  {
    img: analysis,
    title: "Data Ownership ",
    text: "Gives users data ownership, empowering them to manage and utilize their personal data.",
  },
];
