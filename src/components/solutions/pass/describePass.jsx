export default function DescribePass() {
  const dataSections = [
    {
      title: "Issuance and storage",
      description:
        "YourD Pass allows you to securely issue credential data to your users. The issued credential data is stored on the user's device and can be accessed at any time.",
    },
    {
      title: "Data Wallet",
      description:
        "YourD Digital Data Wallet stores user's credential data in card format along with existing Web 3 digital assets, making it easy for users to manage.",
    },
    {
      title: "Providing personal information selectively",
      description:
        "With ZKP, users can selectively reveal only the information they need to easily access your services, while hiding unwanted personal information.",
    },
    {
      title: "Approaches to online and offline authentication",
      description:
        "YourD Pass simplifies identity verification and KYC processes. It provides users with a quick and easy login and authentication experience, both online and offline.",
    },
  ];

  return (
    <div className=" h-fit w-full flex flex-col relative py-20 sm:py-24 gap-16 justify-center items-center ">
      <div className=" w-full">
        <div className=" w-fit text-lg sm:text-[32px] font-pre-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
          User-centered data management
        </div>
        <div className=" text-2xl sm:text-5xl mt-3 font-pre-semibold ">
          Versatile, reliable, and secure
        </div>
        <div className="  sm:text-lg font-medium mt-5 sm:w-1/2 text-gray400">
          Take control of your data with YourD Pass, a Web 3.0 solution that
          emphasizes user data ownership. From online platforms to offline
          environments, YourD Pass enables consistent and easy data management
          wherever you are..
        </div>
      </div>

      <div className=" flex flex-col gap-7  sm:grid sm:grid-cols-4  w-full mt-10 ">
        {dataSections.map((section, index) => (
          <div
            key={index}
            className="border  p-4 rounded-2xl bg-white gap-1 flex flex-col sm:col-span-2 shadow-all-around"
          >
            <div className=" font-pre-bold text-xl sm:text-2xl  mb-2  ">
              {section.title}
            </div>
            <div className=" text-[16px] text-gray300">
              {section.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
