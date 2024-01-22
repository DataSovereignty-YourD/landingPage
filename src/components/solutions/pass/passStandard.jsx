import Ebsi from "../../../assets/img/ebsi-white.png";
import OpenID from "../../../assets/img/openID.png";

export default function PassStandard() {
  return (
    <div className="font-pre-light w-full sm:w-3/4 mx-auto text-white flex flex-col items-center justify-center py-24 leading-9 text-center gap-[60px]">
      <div className="flex flex-col gap-5">
        <span className="text-maincolor font-pre-bold text-lg sm:text-3xl md:text-[44px]">
          Compliance with International Data Standards
        </span>
        <span className="font-pre-light text-gray150  text-sm sm:text-2xl md:text-3xl">
          YourD App is designed to securely store and manage user data in
          accordance with standards like EBSI and OpenID
        </span>
      </div>
      <div className="flex gap-20">
        <img
          src={OpenID}
          alt="openid"
          className="object-contain max-h-[30px] sm:max-h-[50px]"
        />
        <img src={Ebsi} alt="ebsi" className="object-contain max-h-[30px] sm:max-h-[50px]" />
      </div>
    </div>
  );
}
