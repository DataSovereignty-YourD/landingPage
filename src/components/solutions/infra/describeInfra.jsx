export default function DescribeInfra() {
  return (
    <div className=" h-screen w-full flex relative pt-16 justify-between gap-32 items-center bg-white bg-opacity-70">
      <div className="flex justify-between flex-col ">
        <h className=" text-[40px] font-bold text-[#007aff]">
          New horizons for data: <br />a user-centered model for Web 3.0
        </h>

        <p className=" text-lg font-medium mt-5">
          Following the direction of Web 3.0, YourD aims for a user-centric data
          model and ensures the privacy of your data through zero-knowledge
          proofs
        </p>
      </div>

      <div className="  grid w-full gap-24">
        <div className="gap-1 flex flex-col">
          <h className=" font-semibold w-full text-[26px] flex items-center  flex-row">
            <div className="bg-[#007aff] w-4 h-4 rounded-full m-2"></div>A
            transparent connection between businesses and users{" "}
          </h>
          <br />
          <p className=" text-lg">
            YourD creates a trusted data pipeline between businesses and users.
            By utilizing zero-knowledge proofs, we prove the validity of a
            user's data without directly disclosing it. This ensures that the
            user's data is safe from security threats such as intellectual
            property infringement, data integrity issues, and data duplication,
            while further strengthening the trust between businesses and users.
          </p>
        </div>
        <div className="gap-1 flex flex-col">
          <h className=" font-semibold text-[26px] flex items-center  flex-row">
            <div className="bg-[#007aff] w-4 h-4 rounded-full m-2"></div>
            Data, from enterprise to user-centric{" "}
          </h>
          <br />
          <p1 className=" text-lg">
            {" "}
            Data is at the heart of modern business, and Web3.0 is shifting to a
            user-centric data model. YourD is at the center of this shift,
            bringing businesses and users together to unlock the full potential
            of data and explore the new business opportunities of Web3.0
            together.
          </p1>
        </div>
      </div>
    </div>
  );
}
