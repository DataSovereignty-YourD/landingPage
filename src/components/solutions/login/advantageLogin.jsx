export default function AdvantageLogin() {
  return (
    <div className="h-fit w-full relative py-30 justify-between items-centerbg-white bg-opacity-70">
      <div className="font-bold text-3xl sm:text-5xl flex text-center justify-center gradientText">
        Break free from traditional login.
      </div>
      <div className="grid grid-cols-6 items-start justify-center mt-12  py-10">
        {advantageFeatures.map((feature, index) => (
          <div
            key={index}
            className={`features hover:scale-105 duration-200 transform transition-transform  sm:min-h-[280px] ${index < 3 ? 'sm:col-span-2 ' : (index === 3 ? 'sm:col-start-2 sm:col-span-2' :' sm:col-span-2')}  col-span-6 m-2 sm:m-3 min-w-[220px] min-h-[150px] bg-white drop-shadow-xl p-3 sm:p-4`}
          >
            {/* <img
            src={feature.img}
            alt={feature.title}
            className="w-[30px] sm:w-[36px] object-contain mb-2"
          /> */}
            <div className="font-bold text-lg md:text-xl sm:py-3 leading-5  min-h-[56px]">
              {feature.title}
            </div>
            <p className="text-sm h-fit sm:text-[16px] text-gray-700">{feature.text}</p>
          </div>
        ))}
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
