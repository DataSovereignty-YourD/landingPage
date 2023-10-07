import W3CLogo from "../../assets/img/w3c.png";
import Tezos from "../../assets/img/tezos.png";
import Ethereum from "../../assets/img/ethereumLogo.png";
import Evmos from "../../assets/img/evmosLogo.png";
import Tron from "../../assets/img/tronLogo.png";
import Klaytn from "../../assets/img/klaytnLogo.png";
import Polkadot from "../../assets/img/polkadotLogo.png";

export default function GlobalStandard() {
  const Logos = [
    {
      title: "W3C",
      img: W3CLogo,
    },
    {
      title: "Tezos",
      img: Tezos,
    },
    // {
    //   title: "Klaytn",
    //   img: Klaytn,
    // },
    // {
    //   title: "Polkadot",
    //   img: Polkadot,
    // },
    // {
    //   title: "Tron",
    //   img: Tron,
    // },
    // {
    //   title: "Ethereum",
    //   img: Ethereum,
    // },
    // {
    //   title: "Evmos",
    //   img: Evmos,
    // },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start w-full h-fit py-[136px] gap-10 lg:gap-20 text-center sm:text-left">
      <div className="w-fit sm:w-1/2 h-fit font-bold text-2xl md:text-3xl lg:text-[44px] text-[#fccc00] flex items-center text-center sm:text-left">
        GLOBAL STANDARDS & SUPPORT
      </div>
      <div className="sm:w-1/2 text-lg lg:text-[24px] text-gray300 font-pre-medium">
        Developed in compliance with the W3C DID global standard and supported
        by Tezos, we are committed to enabling data ownership.
        <div className="flex justify-center sm:justify-start mt-[60px] gap-20">
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
