import Login from '../../../assets/img/loginScreen2.png';

export default function AdvantageLogin() {
  return (
    <div className="h-fit w-full flex flex-col relative py-32 justify-between items-center gap-20">
      <div className="font-bold text-3xl sm:text-[44px] pb-2 flex text-center justify-center gradientText">
        Break free from traditional login.
      </div>
        <div className='flex gap-20 items-start'>
          <img src={Login} alt={'login'} className="object-contain w-1/3"/>
          <div className='flex flex-col gap-4'>
            {advantageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col hover:scale-105 duration-200 transform transition-transform gap-5  bg-white rounded-[20px] p-3 sm:p-7`}
              >
                <div className="font-pre-bold text-lg md:text-xl leading-5 text-left">
                  {feature.title}
                </div>
                <p className="font-pre-medium text-sm h-fit sm:text-[16px] text-gray300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

const advantageFeatures = [
  {
    //   img: data,
    title: 'Simplicity with Seamless Access',
    text: 'Instead of entering a traditional ID/password, simply scan a QR code to experience YourD login. Quickly access services without complicated authentication procedures',
  },
  {
    //   img: global,
    title: 'Swift and Easy Integration',
    text: 'Utilizing code snippets from YourD login makes integration into your service simple and fast.',
  },
  {
    //   img: law,
    title: 'Privacy at its Core',
    text: 'Unlike traditional centralized logins, YourD login decentralizes and protects your privacy based on your DID.  This gives users full control over their data.',
  },
  {
    //   img: onboarding,
    title: 'Enhanced User Experience',
    text: 'YourD Login provides the same login process across different platforms. It maximizes user convenience by providing a consistent experience for users.',
  },
  {
    //   img: secure,
    title: 'Universal Compatibility',
    text: 'YourD login is platform agnostic - it works across all ecosystems.',
  },
];
