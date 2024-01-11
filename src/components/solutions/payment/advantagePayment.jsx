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
          className="object-contain w-2/3 sm:w-1/4  rounded-3xl "
        />
        <div className="flex flex-col gap-4 sm:ml-48">
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
    text: 'Effortless payments through QR scanning, enhanced user experience with swift transactions.',
  },
  {
    icon: pi2,
    title: 'Innovative UI',
    text: 'Card interface for user-friendly and efficient transactions.',
  },
  {
    icon: pi3,
    title: 'Support Multi-Chain',
    text: 'Diverse options and flexibility for an enhanced user experience.',
  },
  {
    icon: pi4,
    title: 'NFC',
    text: 'Effortless wireless payments on IoT devices for diverse payment scenarios.',
  },
  {
    icon: pi5,
    title: 'Universal Compatibility',
    text: 'Providing a physical card similar to standard cards for convenient everyday use.',
  },
];
