export default function DescribeAnalytic() {
  return (
    <div className="  h-screen w-full   justify-center  items-center bg-white bg-opacity-70 flex-col flex gap-14">
      <div className=" flex items-center justify-center text-4xl font-bold w-full bg-sky-50 p-12">
        YourD Analytics : <br /> It solves all your worries
      </div>
      <div className=" flex flex-row gap-24">
        <div className=" flex justify-center flex-col gap-4 ">
          <h className="  text-[40px] font-bold text-[#007aff] ">
            YourD Analytics:
          </h>

          <p className="  text-lg font-medium mt-5">
            Data Security and Analytics Solutions for Web 3.0 Ensure data safety
            and accuracy at the same time, providing service providers with an
            optimal analytics experience.
          </p>
        </div>

        <div className="   grid w-full gap-24">
          <div className=" gap-1 flex flex-col">
            <h className="  font-semibold w-full text-[26px] flex items-center  flex-row">
              <div className=" bg-[#007aff] w-4 h-4 rounded-full m-2"></div>
              Comply with international data security laws
            </h>
            <br />
            <p className="  text-lg">
              Service providers can analyze and utilize user data without
              worrying about international data security laws like GDPR and
              CCPA.
            </p>
          </div>
          <div className=" gap-1 flex flex-col">
            <h className="  font-semibold text-[26px] flex items-center  flex-row">
              <div className=" bg-[#007aff] w-4 h-4 rounded-full m-2"></div>
              DID-based data analytics
            </h>
            <br />
            <p1 className="  text-lg">
              {" "}
              YourD Analytics is based on DID technology to overcome the
              security vulnerabilities of centralized data storage, while
              ensuring transparency and reliability of data processing.
            </p1>
          </div>
          <div className=" gap-1 flex flex-col">
            <h className="  font-semibold text-[26px] flex items-center  flex-row">
              <div className=" bg-[#007aff] w-4 h-4 rounded-full m-2"></div>
              Serverless Indexing
            </h>
            <br />
            <p1 className="  text-lg">
              {" "}
              For DApps, you can index and analyze users without building a
              separate server. This allows DApps to provide better services
              while remaining serverless.
            </p1>
          </div>
        </div>
      </div>
    </div>
  );
}
