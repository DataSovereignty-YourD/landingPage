import Login from "../../../assets/img/loginScreen.png";
export default function LoginHeader() {
  return (
    <div className="relative w-full text-center sm:text-left flex flex-col sm:flex-row justify-between items-center  bg-white bg-opacity-70">
      <div className="h-fit pt-20  sm:pb-20 z-10">
        <div className="text-2xl sm:text-[32px] font-bold">
          Your<span className="text-[#fccc00]">D</span> Login
        </div>
        <div className="font-semibold text-3xl sm:text-[56px] gradientText  leading-none">
          Simplified, Seamless
          <br /> Web3.0 Access
        </div>
        <p className="font-regular text-xl mt-10">
          Open a <span className="text-[#fccc00]">safe</span> and{" "}
          <span className="text-[#fccc00]">fast</span> step to the Web 3.0
          world!
        </p>
      </div>
      <img
        src={Login}
        alt="Login image"
        className="mb-20 mt-10 sm:pb-0 sm:absolute right-0 sm:mt-72 h-[340px] sm:h-[400px] lg:h-[460px] z-0  object-contain"
      />
    </div>
  );
}
