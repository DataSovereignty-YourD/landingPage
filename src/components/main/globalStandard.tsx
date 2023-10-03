import W3CLogo from "../../assets/img/logos_w3c.png";
import Tezos from "../../assets/img/tezosLogo.png";
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
    <div className="px-5 sm:px-10 md:w-full md:px-[12.5%] justify-center items-center min-h-[60vh] flex flex-col relative font-sf-pro-text text-center py-5 bg-blue-50 z-30">
      <>
        <div className="uppercase text-lg md:text-2xl lg:text-4xl text-center font-bold mb-5 md:mb-10  px-5 w-full">
          GLOBAL RECOGNITION & STANDARDIZATION
        </div>
        <div className="font-normal md:font-medium text-sm px-4 md:text-2xl max-w-[1000px]">
        Adhering to the global standard of W3C,, backing from Tezos, and recognized in blockchain hackathon, we are committed to enabling effective data ownership.
        </div>
      </>
      <div className="flex flex-wrap gap-3 w-full max-w-[1000px] items-center justify-center">
        {Logos.map(logo=> <img key={logo.title} src={logo.img} alt={logo.title}  className="h-6 sm:h-8 md:h-10 mt-4 md:mt-14 backdrop-blur-sm object-contain"/>)}
      </div>
    </div>
  );
}
