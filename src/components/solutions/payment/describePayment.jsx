import codesnippet from '../../../assets/icon/codesnippetIcon.png';
import qr from '../../../assets/icon/QRIcon.png';
import standard from '../../../assets/icon/standardIcon.png';

export default function DescrbiePayment() {
  const features = [
    {
      title: 'Easy Payments with QR',
      descriptions: [
        'Complete transactions with a simple scan. No need to navigate complex payment gateways or input sensitive data.',
        'Our approach accelerates the payment flow, making it quicker and more straightforward, thus enhancing the user payment experience.',
      ],
      icon: qr,
    },
    {
      title: 'Next-Gen Payment',
      descriptions: [
        'Leveraging our advanced authentication, YourD Crypto Pay introduces a new era of payment solutions that integrate effortlessly with current Web 2.0 infrastructure while paving the way for full transaction capabilities within the Web 3.0 ecosystem.',
      ],
      icon: codesnippet,
    },
    {
      title: `Multi-Chain Flexibility`,
      descriptions: [
        "With our multi-chain approach, users have the liberty to transact with a variety of cryptocurrencies. YourD Crypto Pay is designed for the diverse needs of today's digital economy, accommodating multiple blockchains for ultimate payment flexibility.",
      ],
      icon: standard,
    },
  ];

  return (
    <div className="h-fit w-full flex flex-col relative py-20 sm:py-24 gap-16 justify-center items-center ">
      <div className="w-full ">
        <div className="w-fit text-lg sm:text-[32px] font-pre-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
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
      <div className="flex flex-col  sm:flex-row sm:grid sm:grid-cols-6 gap-3  w-full mt-10">
        {features.map((feature) => (
          <div
            className=" rounded-2xl sm:col-span-2 flex flex-col gap-2 bg-white px-5 py-7  lg:p-10 shadow-all-around bg-opacity-70 items-center"
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
