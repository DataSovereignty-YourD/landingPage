import YourDAuthQR from '../../../assets/img/YourDAuthQR.png';
import Payment from '../../../assets/img/ydpay.png';
import pi1 from '../../../assets/img/pi1.png';
import pi2 from '../../../assets/img/pi2.png';
import pi3 from '../../../assets/img/pi3.png';
import pi4 from '../../../assets/img/pi4.png';
import pi5 from '../../../assets/img/pi5.png';
export default function AdvantagePayment() {
  return (
    <div className="h-fit w-full flex flex-col relative py-32 justify-between items-center gap-20">
      <div className="font-pre-bold text-3xl sm:text-[44px] pb-2 flex text-center justify-center gradientText">
        Break free from traditional authentication.
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 items-center sm:items-start">
        <img
          src={Payment}
          alt={'YourDPay'}
          className="object-contain w-2/3 sm:w-1/3 rounded-3xl"
        />
        <div className="flex flex-col gap-4">
          {advantageFeatures.map((feature, index) => (
            <div className="flex hover:scale-105 duration-200 transform transition-transform gap-6 bg-white  rounded-[20px] p-3 sm:p-7">
              <img
                src={feature.icon}
                alt={feature.title}
                className="object-contain w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
              />
              <div key={index} className={`flex flex-col gap-5 `}>
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
    icon: pi1,
    title: 'Auto-Complete QR Payment',
    text: 'Complete payment with a simple QR scan. Eliminates tedious data entry, enhancing user experience and speeding up transactions',
  },
  {
    icon: pi2,
    title: 'Innovative UI',
    text: 'Card-style design resembling traditional methods. Increases convenience and efficiency, offering an intuitive and enjoyable payment process.',
  },
  {
    icon: pi3,
    title: 'Support Multi-Chain',
    text: 'The card-style crypto payment UI is designed to mimic the familiar card format, providing a similar feel to traditional Web2 payment methods while enjoying the benefits of Web 3.0 simultaneously. This innovative UI enhances user convenience and efficiency, making the payment process more intuitive and enjoyable.',
  },
  {
    icon: pi4,
    title: 'NFC',
    text: 'Consumers can enjoy secure and fast wireless payments across various devices, allowing them to create diverse payment scenarios based on their needs. With seamless operation even between mobile devices, one device can serve as the payment terminal, while another performs the payment function. This enables businesses and service providers to handle all payment functions without the need for a separate payment terminal.',
  },
  {
    icon: pi5,
    title: 'Universal Compatibility',
    text: 'It can be issued in the form of a physical card, similar to traditional credit or debit cards. Users can conveniently utilize their virtual assets in everyday life, incorporating the advantages of cryptocurrencies into the physical payment process.',
  },
];
