export default function DescribeInfra() {
  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row relative py-12 justify-between items-center font-sf-pro-text gap-10">
      <div className="w-full sm:w-1/2 ">
        <div className="text-3xl font-bold text-[#007aff]">
          New horizons for data: <br />a user-centered model for Web 3.0
        </div>

        <div className=" text-lg font-medium mt-5 ">
          Following the direction of Web 3.0, YourD aims for a user-centric data
          model and ensures the privacy of your data through ZKP
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-1/2 gap-10">
        <div>
          <div className="flex font-semibold text-2xl mb-2 items-center">
            {/* <div className="bg-[#007aff] w-4 h-4 rounded-full p-2 mr-2"></div> */}
            A transparent connection<br/> between businesses and users
          </div>
          <div className=" text-[16px] text-[#848484]">
            YourD creates a trusted data pipeline between businesses and users.
            By utilizing zero-knowledge proofs, we prove the validity of a
            user's data without directly disclosing it. This ensures that the
            user's data is safe from security threats such as intellectual
            property infringement, data integrity issues, and data duplication,
            while further strengthening the trust between businesses and users.
          </div>
        </div>
        <div>
          <div className=" font-semibold text-[26px] flex items-center  flex-row">
            {/* <div className="bg-[#007aff] w-4 h-4 rounded-full p-2 mr-2"></div> */}
            Data, from enterprise to user-centric
          </div>
          <div className=" text-[16px] text-[#848484]">
            Data is at the heart of modern business, and Web3.0 is shifting to a
            user-centric data model. YourD is at the center of this shift,
            bringing businesses and users together to unlock the full potential
            of data and explore the new business opportunities of Web3.0
            together.
          </div>
        </div>
      </div>
    </div>
  );
}
