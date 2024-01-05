import codesnippet from '../../../assets/icon/codesnippetIcon.png';
import qr from '../../../assets/icon/QRIcon.png';
import standard from '../../../assets/icon/standardIcon.png';

export default function DescrbieLogin() {
  const features = [
    {
      title: "Easy Auth with QR",
      descriptions: [
        "Users can log in by simply scanning a QR code, without the need for complicated passwords or authentication procedures.",
        "The Auth process is faster and simpler, enhancing the user experience.",
      ],
      icon:qr
    },
    {
      title: "Integration Simplicity",
      descriptions: [
        "Developers can easily integrate into their services using code snippets provided by YourD Auth.",
        "These snippets are designed to simplify and optimize the Authentication process for a superior user experience.",
      ],
      icon:codesnippet
    },
    {
      title: `Based on DID (Decentralized Identifier)`,
      descriptions: [
        "YourD Auth offers easy Authentication using the DID, which is a W3C standard.",
        "Due to its adherence to the DID standard, compatibility with various Web 3.0 services is also guaranteed.",
      ],
      icon:standard
    },
  ];

  return (
    <div className="h-fit w-full flex flex-col relative py-20 sm:py-24 gap-16 justify-center items-center ">
      <div className="w-full ">
        <div className="w-fit text-lg sm:text-[32px] font-pre-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
          Seamless Authentication with Web 3.0's Identity
        </div>
        <div className="text-2xl sm:text-5xl mt-3 font-pre-bold ">
          Easy, Swift, Compatible
        </div>
        <div className=" sm:text-lg font-medium mt-5 sm:w-3/5 text-gray400">
          Embrace the future with an effortless Auth using QR code scanning,
          integrated with Web 3.0's decentralized identity. Simplify user
          experience and enhance platform versatility for developers.
        </div>
      </div>
      <div className="flex flex-col  sm:flex-row sm:grid sm:grid-cols-6 gap-3  w-full mt-10">
        {features.map((feature) => (
          <div
            className=" rounded-2xl sm:col-span-2 flex flex-col gap-2 bg-white px-5 py-7  lg:p-10 shadow-all-around bg-opacity-70 items-center"
            key={feature.title}
          >
            <img src={feature.icon} alt={feature.title}  className="object-contain w-[70px] h-[70px]"/>
            <div className="font-pre-bold text-xl sm:text-2xl lg:w-[80%] mb-2 text-center">
              {feature.title}
            </div>
            <ul className="list-disc pl-3 text-gray300">
              {feature.descriptions.map((description, idx) => (
                <li key={idx} className="text-[16px]">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
