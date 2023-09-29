import data from "../assets/img/data_icon.png";
import global from "../assets/img/global_icon.png";
import law from "../assets/img/law_icon.png";
import onboarding from "../assets/img/onboarding_icon.png";
import secure from "../assets/img/secure_icon.png";
import analysis from "../assets/img/analysis_icon.png";

export default function WhyYourD() {
  return (
    <div className="w-full h-[80vh] relative gap-4  justify-center mt-32">
      <div className="text-xl sm:text-4xl  font-bold flex text-center itmes-center justify-center mb-10 sm:mb-20">
        Why YourD?
      </div>
      <div className="grid grid-cols-3 items-start justify-center sm:w-3/4 mx-auto">
        {whyFeatures.map((feature, index) => (
          <div
            key={index}
            className="features  m-3 h-[240px] bg-white drop-shadow-sm sm:px-5 sm:py-5"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-[30px] object-contain"
            />
            <h3 className="font-bold text-xs sm:text-2xl sm:py-3">
              {feature.title}
            </h3>
            <p>{feature.text}</p>
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
