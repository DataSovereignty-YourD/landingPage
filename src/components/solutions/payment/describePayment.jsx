import codesnippet from "../../../assets/icon/codesnippetIcon.png";
import qr from "../../../assets/icon/QRIcon.png";
import standard from "../../../assets/icon/standardIcon.png";
import KYC from "../../../assets/icon/kycIcon.png";
import Multi from "../../../assets/icon/multiIchaincon.png";
import Restriction from "../../../assets/icon/restrictions.png";
import Module from "../../../assets/icon/payment_module.png";
import ID from "../../../assets/icon/idIcon.png";
export default function DescrbiePayment() {
  const features = [
    {
      title: "Easy Pay with QR",
      descriptions: [
        "Scan to pay—no cumbersome steps.",
        "No gateways, just pull transaction ease.",
      ],
      icon: qr,
    },
    {
      title: "D-KYC Integration",
      descriptions: [
        "YourD Crypto Pay brings in straightforward decentralized KYC to meet AML rules and ease the move to Web 3.0 payments.",
      ],
      icon: KYC,
    },
    {
      title: `Multi-Chain Flexibility`,
      descriptions: [
        "Use YourD Crypto Pay to handle multiple cryptocurrencies. Simple, direct, and broad blockchain support.",
      ],
      icon: Multi,
    },
  ];

  return (
    <div className="h-fit w-full flex flex-col relative py-20 sm:py-24 gap-16 justify-center items-center ">
      <div className="w-full ">
        <div className="w-fit text-lg sm:text-[32px] font-pre-bold  pb-1 text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
          The True Web 3.0 Payment Experience
        </div>
        <div className="text-2xl sm:text-5xl mt-3 font-pre-bold ">
          Simple, Innovative, Multi-Chain
        </div>
        <div className=" sm:text-lg font-medium mt-5 sm:w-3/5 text-gray400">
          Unlock the future of transactions with YourD Crypto Pay, which
          harnesses the power of decentralized finance in Web 3.0. Experience
          hassle-free multi-chain payments with pull transaction-based QR code
          scanning.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:grid sm:grid-cols-6 gap-3  w-full mt-10">
        {features.map((feature) => (
          <div
            className=" rounded-2xl sm:col-span-2 flex flex-col gap-2 bg-white px-5 py-7 max-h-min h-full lg:p-10 shadow-all-around bg-opacity-70 items-center"
            key={feature.title}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="object-contain w-[70px] h-[70px]"
            />
            <div className="font-pre-bold text-xl sm:text-2xl lg:w-[80%] mb-2 text-center">
              {feature.title}
            </div>
            <ul className="list-disc pl-3 text-gray300">
              {feature.descriptions.map((description, idx) => (
                <li key={idx} className="text-[20px]">
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
