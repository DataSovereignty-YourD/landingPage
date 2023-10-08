import Diagram from '../../../assets/img/loginDiagram.png';
export default function LoginDiagram() {
  return (
    <div className=" h-fit min-h-1/2 w-full flex flex-col sm:flex-row relative py-32 sm:py-52 justify-between items-center  bg-white bg-opacity-70 gap-5">
      <img src={Diagram} alt="login Diagram" className=" w-full sm:w-1/2 object-contain" />
      <div className="font-semibold text-lg sm:text-2xl">
        Your services can <span className="text-[#fccc00]">easily</span> and{' '}
        <span className="text-[#fccc00]">quickly</span> integrate with Your
        <span className="text-[#fccc00]">D</span> Login using the provided code
        snippets
        <span className="">
          {' '}
          and users can login simply and securely by scanning a QR code.
        </span>
      </div>
    </div>
  );
}
