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
    {
      title: "Klaytn",
      img: Klaytn,
    },
    {
      title: "Polkadot",
      img: Polkadot,
    },
    {
      title: "Tron",
      img: Tron,
    },
    {
      title: "Ethereum",
      img: Ethereum,
    },
    {
      title: "Evmos",
      img: Evmos,
    },
  ];

  return (
    <div className="w-screen justify-center items-center h-[60vh] flex flex-col relative font-sf-pro-text text-center bg-blue-50 z-30">
      <>
        <div className="uppercase text-lg sm:text-4xl text-center font-bold mb-10 px-5 w-full">
          GLOBAL RECOGNITION & STANDARDIZATION
        </div>
        <div className="font-medium text-sm px-4 sm:text-2xl max-w-[1000px]">
          With global standards, W3C compliance, award-winning blockchain
          hackathons, and backing from Tezos, we are committed to enabling
          effective data ownership.
        </div>
      </>
      <div className="flex flex-wrap gap-3 max-w-[1000px] items-center justify-center">
        {Logos.map(logo=> <img key={logo.title} src={logo.img} alt={logo.title}  className="h-12 sm:h-16 mt-14 backdrop-blur-sm object-contain"/>)}
      </div>
    </div>
  );
}
