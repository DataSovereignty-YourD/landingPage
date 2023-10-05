export default function DescrbiePass() {
  return (
    <div className=" h-screen w-full flex relative pt-16 justify-between gap-32 items-center bg-white bg-opacity-70">
      <div className="flex justify-between flex-col ">
        <h className=" text-[40px] font-bold text-[#007aff]">
          Effortless <br />
          Data Management
        </h>
        <h2 className=" text-[50px] font-semibold text-[#f0a9a9]">
          Own and Prove
        </h2>
        <p className=" text-lg font-medium mt-5">
          In an age where data is paramount, <br />
          YourD Pass empowers you to take control of your information and regain
          your sovereignty <br />
          in the Web 3.0 era.
        </p>
      </div>

      <div className="  grid w-full gap-24">
        <div className="gap-1 flex flex-col">
          <h className=" font-semibold w-full text-[26px] flex items-center  flex-row">
            <div className="bg-[#007aff] w-4 h-4 rounded-full m-2"></div>
            Safely Own and Preserve Your Data
          </h>
          <br />
          <p className=" text-lg">
            Users can receive secure, encrypted data and store it on their own
            devices, giving them sovereignty over their data and the ability to
            utilize it independently. In addition, the secure storage of data
            via a DID gives users the freedom to control and utilize their data
            according to the principles of Web 3.0.
          </p>
        </div>
        <div className="gap-1 flex flex-col">
          <h className=" font-semibold text-[26px] flex items-center  flex-row">
            <div className="bg-[#007aff] w-4 h-4 rounded-full m-2"></div>
            Easy Login and KYC Process
          </h>
          <br />
          <p1 className=" text-lg">
            {" "}
            YourD Login allows users to verify their identity with a VC stored
            on their device and utilize a QR code for simple and quick
            authentication. It also provides a KYC process.
          </p1>
        </div>
        <div className="gap-1 flex flex-col">
          {" "}
          <h className=" font-semibold text-[26px] flex items-center  flex-row">
            <div className="bg-[#007aff] w-4 h-4 rounded-full m-2"></div>
            Compliance with International Data Standards{" "}
          </h>
          <br />
          <p2 className=" text-lg">
            YourD Pass is designed to store and manage data in compliance with
            the European Blockchain Services Infrastructure (EBSI) standard.
            With YourD, users can experience reliable and transparent data
            management that complies with international data standards.
          </p2>
        </div>
      </div>
    </div>
  );
}
