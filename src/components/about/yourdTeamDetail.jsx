import { GoPerson } from "react-icons/go";

export default function YourdTeamDetail() {
  return (
    <div>
      <div className="  flex flex-row gap-24 mx-24 h-[600px]">
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
  );
}
