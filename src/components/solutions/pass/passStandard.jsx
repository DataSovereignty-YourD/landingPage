import Ebsi from '../../../assets/img/polkadotLogo.png';

export default function PassStandard() {
  return (
    <div className=" h-80 w-full mt-32  flex items-center justify-center">
      <div className=" flex flex-col gap-4 items-center justify-center">
        <div className="  text-4xl font-semibold  ">
          Compliance with International Data Standards
        </div>
        <div className="  text-xl">
          YourD Pass is designed to securely store and manage user data in
          accordance with standards like EBSI and OpenID
        </div>
        <img src={Ebsi} alt="" className=" w-52" />
      </div>
    </div>
  );
}
