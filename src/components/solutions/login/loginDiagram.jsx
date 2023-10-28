import Diagram from "../../../assets/img/YourDLoginDiagram.png";
export default function LoginDiagram() {
  return (
    <div className=" h-fit min-h-1/2 w-full flex flex-col relative py-32 sm:py-52 justify-between items-center  bg-white bg-opacity-70 gap-20">
      <img
        src={Diagram}
        alt="Auth Diagram"
        className=" w-full sm:w-3/4 lg:w-3/5 object-contain"
      />
      <div className="font-pre-light text-lg sm:text-xl lg:text-3xl w-full sm:w-4/5 text-center">
        Your services can <span className="font-pre-bold">easily</span> and{" "}
        <span className="font-pre-bold">quickly</span> integrate with{" "}
        <span className="font-pre-bold">
          Your<span className="text-[#fccc00]">D</span>
        </span>
        &nbsp;Auth using the provided code snippets
        <span className="">
          {" "}
          and users can auth simply and securely by scanning a QR code.
        </span>
      </div>
    </div>
  );
}
