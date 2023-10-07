export default function DescribeAnalytic() {
  const analyticsFeatures = [
    {
      title: "Comply with international data security laws",
      icon:'',
      description: "Service providers can analyze and utilize user data without worrying about international data security laws like GDPR and CCPA."
    },
    {
      title: "DID-based data analytics",
      icon:'',
      description: "YourD Analytics is based on DID technology to overcome the security vulnerabilities of centralized data storage, while ensuring transparency and reliability of data processing."
    },
    {
      title: "Serverless Indexing",
      icon:'',
      description: "For DApps, you can index and analyze users without building a separate server. This allows DApps to provide better services while remaining serverless."
    }
  ];

  return (
    <div className="min-h-screen h-fit w-full flex flex-col relative py-20 sm:py-40 md:py-0 gap-32 justify-center items-center ">
      <div className="w-full">
        <div className="text-[40px] font-bold">
          YourD Analytics
        </div>
        <div className="text-lg font-medium mt-5 md:w-1/2 gray-400">
          Data Security and Analytics Solutions for Web 3.0 Ensure data safety and accuracy at the same time, providing service providers with an optimal analytics experience.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-7 w-full mt-10">
        {analyticsFeatures.map((feature, idx) => (
          <div key={idx} className="gap-1 flex flex-col">
            <div className="font-bold text-xl sm:text-2xl mb-2 sm:text-center ">
              {feature.title}
            </div>
            <p className=" text-[16px] text-gray300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
