import Pass from "../../../assets/img/passImg.png";
export default function PassHeader() {
  return (
    <div className=" h-[600px]  relative w-full flex justify-between items-center bg-white">
      <div>
        <h className="  text-[66px] font-bold">
          Your<span className="  text-[#fccc00]">D</span> Pass
        </h>
        <div className=" font-semibold text-[66px] gradientText mt-1 relative -top-1">
          Empower <br />
          Your Data Ownership
        </div>

        <p className="  font-medium text-xl">
          Experience <span className="  text-[#fccc00]">Decentralized</span>
          &nbsp; Ownership!
        </p>
      </div>
      <img
        src={Pass}
        alt="Login image"
        className="  w-1/2 object-contain pr-10"
      />
    </div>
  );
}
