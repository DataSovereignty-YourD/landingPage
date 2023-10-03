import Login from '../../assets/img/login.png';
export default function YourDLoginPage() {
  return (
    <>
      <div className="h-1/2 flex relative justify-between pt-16 items-center  mx-5 sm:mx-10 md:w-3/4 md:mx-auto bg-white ">
        <div>
          <h className="text-[66px] font-bold">
            Your<span className="text-[#fccc00]">D</span> Login
          </h>
          <h1 className="font-semibold text-[66px] text-[#007aff] mt-4">
            Simplified, Seamless
          </h1>
          <h2 className="font-medium text-2xl mt-4">Web3.0 Access</h2>
          <p className="font-medium text-xl mt-2">
            Open a <span className="text-[#fccc00]">safe</span> and{' '}
            <span className="text-[#fccc00]">fast</span> step to the Web 3.0
            world!
          </p>
        </div>
        <img src={Login} alt="Login image" className="h-1/2 object-cover"/>
      </div>



      <div className="h-screen w-full flex relative justify-between items-center mx-5 sm:mx-10 md:w-3/4 md:mx-auto bg-white bg-opacity-70">
        <div>
          <h className="text-[50px] font-bold text-[#007aff]">
            Seamless Login with <br />
            Web 3.0's Identity
          </h>
          <h2 className="text-[50px] font-semibold text-[#f0a9a9]">
            Easy,Swift,Compatible
          </h2>
          <p className="text-lg font-medium mt-5">
            Embrace the future with an effortless login using QR code scanning,
            <br />
            integrated with Web 3.0's decentralized identity. Simplify user
            experience and enhance platform versatility for developers.
          </p>
        </div>
        <div className="mx-20 grid  gap-10">
          <div>
            <h className="font-semibold text-[26px]">Easy Login with QR</h>
            <br />
            <p className='text-lg'>
            •Users can log in by simply scanning a QR code, without the need for
            complicated passwords or authentication procedures. <br />
            •The login process is faster and simpler, enhancing the user
            experience.
            </p>
          </div>
          <div>
            <h className="font-semibold text-[26px]">Integration Simplicity</h><br/>
            <p1 className="text-lg"> •Developers can easily integrate into their services using
            code snippets provided by YourD Login.
            <br /> •These snippets are designed to simplify and optimize the
            login process for a superior user experience.
            </p1>
          </div>
          <div>
            {' '}
            <h className="font-semibold text-[26px]">
            Based on DID (Decentralized Identifier)
            </h>
            <br /><p2 className="text-lg">
            •YourD Login offers easy login using the DID, which is a W3C
            standard.
            <br />•Due to its adherence to the DID standard, compatibility with
            various Web 3.0 services is also guaranteed.</p2>
          </div>
        </div>
      </div>
    </>
  );
}
