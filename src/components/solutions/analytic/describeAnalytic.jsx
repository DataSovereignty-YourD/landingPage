export default function DescribeAnalytic() {
  const analyticsFeatures = [
    {
      title: "Comply with international data security laws",
      icon: "",
      description:
        "Service providers can analyze and utilize user data without worrying about international data security laws like GDPR and CCPA.",
    },
    {
      title: "DID-based data analytics",
      icon: "",
      description:
        "YourD Analytics is based on DID technology to overcome the security vulnerabilities of centralized data storage, while ensuring transparency and reliability of data processing.",
    },
    {
      title: "Serverless Indexing",
      icon: "",
      description:
        "For DApps, you can index and analyze users without building a separate server. This allows DApps to provide better services while remaining serverless.",
    },
  ];

  return (
    <div className="h-fit w-full flex flex-col relative py-20 sm:py-24 gap-16 justify-center items-center ">
      <div className="w-full">
        <div className="w-fit text-lg sm:text-[32px] font-pre-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
          Empowering Web 3.0 Data Insights
        </div>
        <div className="text-2xl sm:text-5xl mt-3 font-pre-semibold ">
          Compliant, DID-Driven, Serverless.
        </div>
        <div className="text-lg font-medium mt-5 md:w-1/2 gray-400">
          Data Security and Analytics Solutions for Web 3.0 Ensure data safety
          and accuracy at the same time, providing service providers with an
          optimal analytics experience.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-7 sm:grid sm:grid-cols-6 w-full mt-10 ">
        {analyticsFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="gap-1 flex flex-col sm:col-span-2 border rounded-md p-4 bg-white shadow-all-around"
          >
            <div className="font-pre-bold text-xl sm:text-2xl mb-2  ">
              {feature.title}
            </div>
            <p className=" text-[16px] text-gray300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
