export default function DescribeInfra() {
  const infraFeatures = [
    {
      title: "A transparent connection between businesses and users",
      description: "YourD creates a trusted data pipeline between businesses and users. By utilizing zero-knowledge proofs, we prove the validity of a user's data without directly disclosing it. This ensures that the user's data is safe from security threats such as intellectual property infringement, data integrity issues, and data duplication, while further strengthening the trust between businesses and users."
    },
    {
      title: "Data, from enterprise to user-centric",
      description: "Data is at the heart of modern business, and Web3.0 is shifting to a user-centric data model. YourD is at the center of this shift, bringing businesses and users together to unlock the full potential of data and explore the new business opportunities of Web3.0 together."
    }
  ];

  return (
    <div className="h-fit w-full flex flex-col relative py-20 sm:py-24 gap-16 justify-center items-center ">
      <div className="w-full ">
        <div className="w-fit text-lg sm:text-[32px] font-pre-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
          New horizons for data<br />a user-centered model for Web 3.0
        </div>
        <div className="sm:text-lg font-medium mt-5 sm:w-1/2 text-gray400">
          Following the direction of Web 3.0, YourD aims for a user-centric data model and ensures the privacy of your data through ZKP
        </div>
      </div>
 
      <div className="flex flex-col sm:flex-row gap-7 w-full mt-10">
        {infraFeatures.map((feature, idx) => (
          <div key={idx} className="gap-1 flex flex-col w-full">
            <div className="font-pre-bold text-xl sm:text-2xl mb-2 ">
              <div >{feature.title}</div>
            </div>
            <div className="text-[16px] text-gray300">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
