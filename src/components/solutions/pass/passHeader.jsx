import Pass from "../../../assets/img/yourdpassall.png";
export default function PassHeader() {
  return (
    <div className="relative w-full text-center sm:text-left flex flex-col md:flex-row justify-between items-center sm:items-start  bg-white bg-opacity-70">
      <div className="h-fit pt-20  sm:pb-20 z-10">
        <div className="text-2xl sm:text-[32px] font-pre-bold">
          Your<span className="text-[#fccc00]">D</span> Pass
        </div>
        <div className="font-pre-semibold text-3xl sm:text-[44px] md:text-[56px] gradientText mt-3 leading-none">
        Empower <br />
          Your Data Ownership
        </div>
        <p className="font-pre-reqular text-xl mt-10 ">
        Open the gateway to Web 3.0 data ownership and control!
        </p>
      </div>
      <img
        src={Pass}
        alt="Login image"
        className="mb-10 sm:mb-0 md:mb-10 md:top-20 sm:pb-0 md:absolute right-0 md:w-[50%] lg:w-[50%] z-0  object-contain"
      />
    </div>
  );
}
