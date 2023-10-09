import LeverageInfra from "../../../assets/img/dataLeverageImage.png";
export default function InfraHeader() {
  return (
    <div className="relative w-full text-center sm:text-left flex flex-col sm:flex-row justify-between items-center  bg-white bg-opacity-70">
      <div className="h-fit pt-20 sm:pb-20 z-10">
        <div className="text-2xl sm:text-[32px] font-pre-bold mb-3">
          Your<span className="text-[#fccc00] ">D</span> Data Leverage Infra
        </div>
        <span className="font-pre-semibold text-3xl sm:text-[56px] gradientText  leading-none overflow-visible">
        The Web3.0 <br />
          Data Paradigm
        </span>
        <p className="font-pre-reqular text-xl mt-10 ">
        Dive into a trusted bridge between users and businesses in the Web 3.0
        </p>
      </div>
      <img
        src={LeverageInfra}
        alt="Data Leverage Infra"
        className="mb-10 sm:mb-0 md:mb-10 md:top-14 sm:pb-0 md:absolute right-0 w-3/4 sm:w-[45%] md:w-[40%] lg:w-[35%] z-0  object-contain"
      />
    </div>
  );
}
