export default function DescribeAnalytic() {
  return (
    <div className=" min-h-screen w-full flex flex-col sm:flex-row relative py-16 justify-between items-center font-sf-pro-text gap-10">
      {/* <div className=" flex items-center justify-center text-4xl font-bold w-full bg-sky-50 p-12">
        YourD Analytics : <br /> It solves all your worries
      </div> */}
      {/* <div className=" w-full sm:w-1/2"> */}
        <div className="w-full sm:w-1/2">
          <div className="  text-[40px] font-bold text-[#007aff] ">
            YourD Analytics:
          </div>

          <div className="  text-lg font-medium mt-5">
            Data Security and Analytics Solutions for Web 3.0 Ensure data safety
            and accuracy at the same time, providing service providers with an
            optimal analytics experience.
          </div>
        </div>

        <div className="   flex flex-col w-full sm:w-1/2 gap-10">
          <div className=" gap-1 flex flex-col">
            <div className="  font-semibold w-full text-[26px] flex items-center  flex-row">
              <div className=" bg-[#007aff] w-4 h-4 rounded-full p-2 mr-2"></div>
              Comply with international data security laws
            </div>
            <br />
            <p className="   text-[16px] text-[#848484]">
              Service providers can analyze and utilize user data without
              worrying about international data security laws like GDPR and
              CCPA.
            </p>
          </div>
          <div className=" gap-1 flex flex-col">
            <div className="  font-semibold text-[26px] flex items-center  flex-row">
              <div className=" bg-[#007aff] w-4 h-4 rounded-full p-2 mr-2"></div>
              DID-based data analytics
            </div>
            <br />
            <div className="text-lg  text-[16px] text-[#848484]">
              YourD Analytics is based on DID technology to overcome the
              security vulnerabilities of centralized data storage, while
              ensuring transparency and reliability of data processing.
            </div>
          </div>
          <div className=" gap-1 flex flex-col">
            <div className="  font-semibold text-[26px] flex items-center  flex-row">
              <div className=" bg-[#007aff] w-4 h-4 rounded-full p-2 mr-2"></div>
              Serverless Indexing
            </div>
            <br />
            <div className=" text-[16px] text-[#848484]">
              For DApps, you can index and analyze users without building a
              separate server. This allows DApps to provide better services
              while remaining serverless.
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
