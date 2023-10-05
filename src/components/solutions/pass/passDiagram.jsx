import Diagram from "../../../assets/img/loginDiagram.png";
export default function PassDiagram() {
  return (
    <div className=" h-[700px] w-full  relative my-12 items-center  justify-center gap-12 bg-sky-100 flex flex-col bg-opacity-70">
      <div className="text-4xl font-bold">YourD Login with YourD Pass</div>
      <img src={Diagram} alt="login Diagram" className=" w-1/2" />
      <div className=" font-semibold text-2xl mx-12">
        With <span className=" text-[#fccc00]">YourD Pass</span>, you can easily
        access your services using{" "}
        <span className=" text-[#fccc00]">YourD Login</span>. This provides
        users with a safer and freer Web 3.0 experience that takes data
        sovereignty and privacy seriously.
      </div>
    </div>
  );
}
