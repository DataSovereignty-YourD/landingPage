export default function DescrbieLogin() {
  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row relative pt-16 justify-between items-center font-sf-pro-text gap-10">
      <div className="w-full sm:w-1/2">
        <div className="text-3xl font-bold text-[#007aff]">
          Seamless Login with <br />
          Web 3.0's Identity
        </div>
        <div className="text-4xl leading-loose font-semibold text-[#f0a9a9]">
          Easy,Swift,Compatible
        </div>
        <div className="text-lg font-medium mt-5">
          Embrace the future with an effortless login using QR code scanning,
          integrated with Web 3.0's decentralized identity. Simplify user
          experience and enhance platform versatility for developers.
        </div>
      </div>
      <div className=" flex flex-col gap-7 w-full sm:w-1/2">
        <div>
          <div className="font-semibold text-2xl mb-2">Easy Login with QR</div>
          
          <p className="text-[16px]">
            • Users can log in by simply scanning a QR code, without the need for
            complicated passwords or authentication procedures. <br />
            • The login process is faster and simpler, enhancing the user
            experience.
          </p>
        </div>
        <div>
          <div className="font-semibold text-2xl mb-2">Integration Simplicity</div>
          <p className="text-[16px]">
            • Developers can easily integrate into their services using code
            snippets provided by YourD Login.
            <br /> • These snippets are designed to simplify and optimize the
            login process for a superior user experience.
          </p>
        </div>
        <div>
          <div className="font-semibold text-2xl mb-2">
            Based on DID (Decentralized Identifier)
          </div>
          <p className="text-[16px]">
            • YourD Login offers easy login using the DID, which is a W3C
            standard.
            <br />
            • Due to its adherence to the DID standard, compatibility with
            various Web 3.0 services is also guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
}
