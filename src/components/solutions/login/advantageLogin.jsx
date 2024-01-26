import YourDAuthQR from "../../../assets/img/YourDAuthQR.png";
import access from '../../../assets/icon/access.png';
import compatibility from '../../../assets/icon/compatibility.png';
import privacyIcon from '../../../assets/icon/privacyIcon.png';
import uxIcon from '../../../assets/icon/uxIcon.png';
import intergrationIcon from '../../../assets/icon/intergrationIcon.png';

export default function AdvantageLogin() {

  return (
    <div className="h-fit w-full flex flex-col relative py-32 justify-between items-center gap-20">
      <div className="font-pre-bold text-3xl sm:text-[44px] p-2 flex text-center justify-center gradientText">
        Break free from traditional authentication.
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 items-center sm:items-start">
        <img src={YourDAuthQR} alt={"YourDAuthQR"} className="object-contain w-2/3 sm:w-1/3  shadow-all-around rounded-3xl" />
        <div className="flex flex-col gap-4">
          {advantageFeatures.map((feature, index) => (
            <div className="flex hover:scale-105 duration-200 transform transition-transform gap-6 bg-white  rounded-[20px] p-3 sm:p-7">
              <img src={feature.icon} alt={feature.title} className="object-contain w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"/>
              <div
                key={index}
                className={`flex flex-col gap-5 `}
              >
                <div className="font-pre-bold text-lg md:text-xl leading-5 text-left">
                  {feature.title}
                </div>
                <p className="font-pre-regular font-bold text-sm h-fit sm:text-[16px] text-gray300">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const advantageFeatures = [
  {
    icon:access,
    title: "Simplicity with Seamless Access",
    text: "Instead of entering a traditional ID/password, simply scan a QR code to experience YourD Auth. Quickly access services without complicated authentication procedures",
  },
  {
    icon: intergrationIcon,
    title: "Swift and Easy Integration",
    text: "Utilizing code snippets from YourD Auth makes integration into your service simple and fast.",
  },
  {
    icon:privacyIcon,
    title: "Privacy at its Core",
    text: "Unlike traditional centralized auths, YourD Auth decentralizes and protects your privacy based on your DID.  This gives users full control over their data.",
  },
  {
    icon: uxIcon,
    title: "Enhanced User Experience",
    text: "YourD Auth provides the same auth process across different platforms. It maximizes user convenience by providing a consistent experience for users.",
  },
  {
    icon:compatibility,
    title: "Universal Compatibility",
    text: "YourD Auth is platform agnostic - it works across all ecosystems.",
  },
];
