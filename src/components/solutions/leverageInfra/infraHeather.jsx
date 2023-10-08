import Pass from "../../../assets/img/passImg.png";
export default function InfraHeader() {
  return (
    <div className="relative w-full text-center sm:text-left flex flex-col sm:flex-row justify-between items-center  bg-white bg-opacity-70">
      <div className="h-fit pt-20 sm:pb-20 z-10">
        <div className="text-2xl sm:text-[32px] font-bold">
          Your<span className="text-[#fccc00]">D</span> Data Leverage Infra
        </div>
        <div className="font-semibold text-3xl sm:text-[56px] gradientText mt-3 leading-none pb-1">
        The Web3.0 <br />
          Data Paradigm
        </div>
        <p className="font-regular text-xl mt-10 sm:w-3/5">
        Dive into a trusted bridge between users and businesses in the Web 3.0
        </p>
      </div>
      <img
        src={Pass}
        alt="Login image"
        className="mb-20 mt-10 sm:top-60 md:top-20 sm:pb-0 sm:absolute -right-0 h-[300px] sm:h-[320px] lg:h-[360px] z-0  object-contain"
      />
    </div>
  );
}
