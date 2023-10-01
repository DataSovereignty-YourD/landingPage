import React, { useEffect, useState, useRef } from "react";
import Footer from "../common/footer";
import { GoPerson, GoTrophy } from "react-icons/go";
// import PolkadotLogo from "../../assets/img/Polkadot_Logo.png";
// import EthLogo from "../assets/img/ethereum-logo.png";
// import KlaytnLogo from "../assets/img/klaytn-logo.png";
import TronLogo from "../../assets/img/tron-logo.png";

export default function YourdVision() {
  const specialRef = useRef(null);

  return (
    <>
      <div className="mx-6 sm:mx-32 font-sf-pro-text">
        <div className="h-screen  items-center justify-center flex flex-col">
          <div className="text-xl sm:text-5xl font-bold items-center justify-center flex ">
            YourD Vision
          </div>
          <div className="flex text-sm items-center justify-center sm:text-xl w-2/3">
            YourD recognizes the challenges of data sovereignty and personal
            information protection in today's web environment. Furthermore, it
            fundamentally addresses these issues by introducing a new
            authentication protocol and infrastructure services centered around
            the core principle of individual data sovereignty, a key tenet of
            Web 3.0.
          </div>
        </div>

        <div>
          <div className="text-xl sm:text-4xl font-bold h-screen items-center justify-center flex">
            Mission
          </div>
        </div>
        <div className="">
          <div ref={specialRef} className="  min-h-screen">
            <div className="text-xl sm:text-4xl mb-24 font-bold items-center justify-center flex">
              What makes Your
              <span className="text-[#fccc00]">D</span> &nbsp; special?
            </div>
            <div className="items-center gap-12 justify-center flex w-full flex-col ">
              <div className="flex flex-row gap-12 mx-32">
                <div className="flex border border-gray-400  p-4 rounded-md">
                  보안 및 프라이버시 강화: YourD는 데이터 보안과 개인정보 보호를
                  우선시합니다. 사용자에게 데이터를 쉽게 관리하고 활용할 수 있는
                  간단한 방법을 제공하고, 데이터 판매와 같은 권리 행사와 관련된
                  서비스도 제공합니다.
                </div>
                <div className="flex border border-gray-400  p-4 rounded-md">
                  보안 및 프라이버시 강화: YourD는 데이터 보안과 개인정보 보호를
                  우선시합니다. 사용자에게 데이터를 쉽게 관리하고 활용할 수 있는
                  간단한 방법을 제공하고, 데이터 판매와 같은 권리 행사와 관련된
                  서비스도 제공합니다.
                </div>
                <div className="flex border border-gray-400  p-4 rounded-md">
                  보안 및 프라이버시 강화: YourD는 데이터 보안과 개인정보 보호를
                  우선시합니다. 사용자에게 데이터를 쉽게 관리하고 활용할 수 있는
                  간단한 방법을 제공하고, 데이터 판매와 같은 권리 행사와 관련된
                  서비스도 제공합니다.
                </div>
              </div>
              <div className="flex flex-row gap-12 mx-64">
                <div className="flex border border-gray-400  p-4 rounded-md">
                  보안 및 프라이버시 강화: YourD는 데이터 보안과 개인정보 보호를
                  우선시합니다. 사용자에게 데이터를 쉽게 관리하고 활용할 수 있는
                  간단한 방법을 제공하고, 데이터 판매와 같은 권리 행사와 관련된
                  서비스도 제공합니다.
                </div>
                <div className="flex border border-gray-400  p-4 rounded-md">
                  보안 및 프라이버시 강화: YourD는 데이터 보안과 개인정보 보호를
                  우선시합니다. 사용자에게 데이터를 쉽게 관리하고 활용할 수 있는
                  간단한 방법을 제공하고, 데이터 판매와 같은 권리 행사와 관련된
                  서비스도 제공합니다.
                </div>
              </div>
            </div>

            <div className="text-xl uppercase sm:text-4xl font-bold h-screen items-center justify-center flex">
              road map
            </div>
            <div className="min-h-screen items-center justify-center flex flex-col">
              <div className="text-xl sm:text-4xl font-bold mb-8">Our Team</div>
              <div className="mx-24 mb-8">
                <ul className=" list-disc pl-5 mb-12">
                  <li>
                    We formed a team called 0xcatbox and have been exploring the
                    blockchain identity field since 2021.
                  </li>
                  <li>
                    Our team is one that has participated in several renowned
                    international blockchain hackathons, each time with a
                    different project, and has won awards five times.(Polkadot
                    North America, ETHSeoul, Klaymakers 22, evmos, Tron Grand
                    Hackathon Season 3)
                  </li>

                  <li>
                    Based on that team, we launched YourD in December 2022,
                    participated in an incubating program called TTI hosted by
                    Tezos, successfully completed Demo day, and have now
                    received a grant from Tezos.
                  </li>
                  <li>
                    Also, we are building the project while receiving internal
                    support through a close collaborative relationship with
                    Klaytn. In Klaytn, we developed a targeted advertising
                    protocol utilizing Zero-Knowledge Proof called D-ad and won
                    an award at a hackathon called KlayMaker22, and have been
                    building the project through a continuous collaborative
                    relationship since then.
                  </li>
                </ul>
              </div>
              <div className="  flex flex-row gap-24 mx-24">
                <div className="  border border-gray-600 backdrop-blur-sm rounded-3xl py-12 flex flex-col gap-12  w-full shadow-xl">
                  <div className="flex items-center justify-center flex-col gap-8">
                    <div className="  font-bold">JaeGyeong Yeom</div>
                    <GoPerson
                      size={62}
                      className="  border  border-gray-800 rounded-full "
                    />
                  </div>
                  <ul className="   mx-6 list-disc pl-5">
                    <li>Leader of YourD team</li>
                    <li>Blockchain Engineer in ZKP and DID</li>
                    <li>Developer of YourD's DID and SDK</li>
                    <li>Dev ambassador for Klaytn</li>
                    <li>Contributing to the Iden3 and ZK-SBT projects </li>
                    <li>Co-Founder of the De-Butler blockchain society</li>
                  </ul>
                </div>
                <div className="  border border-gray-600 backdrop-blur-sm rounded-3xl py-12 flex flex-col gap-12  w-full shadow-xl">
                  <div className="flex items-center justify-center flex-col gap-8">
                    <div className="  font-bold">Younghoon Cha</div>
                    <GoPerson
                      size={62}
                      className="  border  border-gray-800 rounded-full "
                    />
                  </div>
                  <ul className="   mx-6 list-disc pl-5">
                    <li>Member of YourD team</li>
                    <li>Blockchain Engineer in ZKP and DID</li>
                    <li>Developer of YourD's DID and SDK</li>
                    <li>Dev ambassador for Klaytn</li>
                    <li>Co-Founder of the De-Butler blockchain society</li>
                  </ul>
                </div>
                <div className="  border border-gray-600 backdrop-blur-sm rounded-3xl py-12 flex flex-col gap-12  w-full shadow-xl">
                  <div className="flex items-center justify-center flex-col gap-8">
                    <div className="  font-bold">Jihwang Kim</div>
                    <GoPerson
                      size={62}
                      className="  border  border-gray-800 rounded-full "
                    />
                  </div>
                  <ul className="   mx-6 list-disc pl-5">
                    <li>Member of YourD team</li>
                    <li>Blockchain Engineer</li>
                    <li>Full Stack developer</li>
                    <li>Developer of YourD's DID and SDK</li>
                    <li>Dev ambassador for Klaytn</li>
                    <li>Co-Founder of the De-Butler blockchain society</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="  h-screen items-center justify-center flex flex-col ">
            <div className="   text-xl sm:text-4xl font-bold mb-16">
              Team Award
            </div>
            <div className="  flex flex-row gap-4 mx-24">
              <div className="  flex flex-col w-full border border-gray-500 py-12 px-8 backdrop-blur-sm rounded-3xl ">
                <div className="  items-center justify-center flex">
                  {/* <img src={PolkadotLogo} alt="" /> */}
                </div>
                <div>
                  2022.7 - Polkadot : North America Edition: Astar Network - NFT
                  dApps Staking Micro-Rewards
                </div>
              </div>
              <div className="  flex flex-col w-full border border-gray-500 py-12 px-8 backdrop-blur-sm rounded-3xl ">
                <div className="  items-center justify-center flex">
                  {/* <img src={EthLogo} alt="" /> */}
                </div>
                <div>2022.8 - ETHSeoul: IPFS/File coin winner</div>
              </div>
              <div className="  flex flex-col w-full border border-gray-500 py-12 px-8 backdrop-blur-sm rounded-3xl ">
                <div className="  items-center justify-center flex">
                  {/* <img src={KlaytnLogo} alt="" /> */}
                </div>
                <div>
                  2022.10 - Klaymakers 22: Public Goods Track FinalList & winner
                </div>
              </div>
              <div className="  flex flex-col w-full border border-gray-500 py-12 px-8 backdrop-blur-sm rounded-3xl ">
                <div className="  items-center justify-center flex">
                  <img alt="" />
                </div>
                <div>
                  2022.11 - Evmos-Covalent #OneMillionWallets Hackathon -
                  NFT,GameFi Top Prize 1st
                </div>
              </div>
              <div className="  flex flex-col w-full border border-gray-500 py-12 px-8 backdrop-blur-sm rounded-3xl ">
                <div className="  items-center justify-center flex">
                  <img src={TronLogo} alt="" />
                </div>
                <div>
                  2022.12 - TRON Grand Hackathon : Season 3 - GameFi: 5th, TRON
                  DAO Forum: GameFi Prizes 4th
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
