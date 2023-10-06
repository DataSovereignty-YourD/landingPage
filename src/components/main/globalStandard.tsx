import W3CLogo from '../../assets/img/w3c.png';
import Tezos from '../../assets/img/tezos.png';
import Ethereum from '../../assets/img/ethereumLogo.png';
import Evmos from '../../assets/img/evmosLogo.png';
import Tron from '../../assets/img/tronLogo.png';
import Klaytn from '../../assets/img/klaytnLogo.png';
import Polkadot from '../../assets/img/polkadotLogo.png';

export default function GlobalStandard() {
  const Logos = [
    {
      title: 'W3C',
      img: W3CLogo,
    },
    {
      title: 'Tezos',
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
    <div className="px-[136px] min-h-[484px] pt-[100px] pb-[132px] relative font-sf-pro-text  bg-[#171717] bg-opacity-90 ">
      <>
        <div className="flex items-center justify-start w-full h-fit mb-[60px]">
          <div className="w-[637px] h-[106px] font-bold text-[44px] text-[#fccc00] flex items-center">
            GLOBAL STANDARDS &<br />
            SUPPORT
          </div>
          <div className="w-[516px] h-[106px] text-[24px] ml-[60px] text-white">
            Developed in compliance with the W3C DID global standard and
            supported by Tezos, we are committed to enabling data ownership.
            <div className="w-[516px] h-[80px]">
              <div className="flex mt-[60px]">
                <img
                  src={W3CLogo}
                  alt="w3c_logo"
                  className="w-[149.5px] h-[80px] mr-20"
                />
                <img
                  src={Tezos}
                  alt="tezos_logo"
                  className="w-[230.8456px] h-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}


