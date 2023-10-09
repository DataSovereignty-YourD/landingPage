import W3CLogo from "../../assets/img/w3c.png";
import Tezos from "../../assets/img/tezos.png";

export default function GlobalStandard() {

  return (
    <div className="flex flex-col sm:flex-row items-center  justify-center sm:items-start w-full h-fit py-[136px] gap-10 lg:gap-20 text-center sm:text-left ">
      <div className="w-fit sm:w-1/2 font-pre-bold  text-2xl md:text-3xl lg:text-[44px] text-[#fccc00] flex items-center text-center sm:text-left relative z-10">
        GLOBAL STANDARDS & SUPPORT
      </div>
      <div className="sm:w-1/2 text-lg lg:text-[24px] text-gray300 font-pre-medium z-10">
        Developed in compliance with the W3C DID global standard and supported
        by Tezos, we are committed to enabling data ownership.
        <div className="flex justify-center sm:justify-start mt-[60px] gap-20 z-10">
          <img
            src={W3CLogo}
            alt="w3c_logo"
            className="h-10 md:h-[60px] lg:h-[80px] object-contain"
          />
          <img
            src={Tezos}
            alt="tezos_logo"
            className="h-10 md:h-[60px] lg:h-[80px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
