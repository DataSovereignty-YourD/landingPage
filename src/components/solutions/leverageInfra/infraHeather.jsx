import Pass from "../../../assets/img/passImg.png";
export default function InfraHeader() {
  return (
    <div className="h-1/2 relative w-full text-center sm:text-left flex flex-col sm:flex-row justify-between items-center bg-white bg-opacity-70 py-12">
      <div>
        <div className=" text-2xl sm:text-3xl font-bold ">Data Leverage Infra</div>
        <div className="font-semibold text-3xl sm:text-5xl gradientText py-4">
          The Web3.0 <br />
          Data Paradigm
        </div>

        <p className="  font-regular text-2xl mt-4">
          Dive into a trusted bridge between users and businesses in the Web 3.0
        </p>
      </div>
      <img
        src={Pass}
        alt="Login image"
        className=" h-[340px] sm:h-[400px] my-12 sm:my-0 object-contain"
      />
    </div>
  );
}
