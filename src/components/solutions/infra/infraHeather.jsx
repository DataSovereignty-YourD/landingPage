import Pass from "../../../assets/img/passImg.png";
export default function InfraHeader() {
  return (
    <div className=" h-[600px]  relative w-full flex justify-between items-center bg-white">
      <div>
        <h className="  text-[66px] font-bold">Data Leverage Infra</h>
        <div className=" font-semibold text-[66px] gradientText mt-1 relative -top-1">
          The Web3.0 <br />
          Data Paradigm
        </div>

        <p className="  font-medium text-xl">
          Dive into a trusted bridge between users and businesses in the Web 3.0
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
