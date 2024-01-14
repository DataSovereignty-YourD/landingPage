import Analytic from "../../../assets/img/analytics_imac.webp";

export default function AnalyticHeader() {
  return (
    <div className="relative w-full text-center sm:text-left flex flex-col md:flex-row justify-between items-center sm:items-start  bg-white bg-opacity-70">
      <div className="h-fit pt-10 sm:pt-20  sm:pb-20 z-10">
        <div className="text-2xl sm:text-[32px] font-pre-bold mb-3">
          Your<span className="text-[#fccc00]">D</span> Analytics
        </div>
        <span className="font-pre-bold text-3xl sm:text-[44px] md:text-[56px] gradientText  leading-none">
        Deep, Insightful <br /> Web3.0 Data Analysis
        </span>
        <p className="font-pre-regular text-xl mt-10 sm:w-4/5">
        Dive deeper into the Web 3.0 world with trusted insights and
          user-centric data protection!
        </p>
      </div>
      <img
        src={Analytic}
        alt="AnalyticImage"
        className="mb-10 sm:mb-0 md:mb-10 md:top-14 sm:pb-0 md:absolute right-0 md:w-[50%] lg:w-[45%] z-0  object-contain"
      />
    </div>
  );
}
