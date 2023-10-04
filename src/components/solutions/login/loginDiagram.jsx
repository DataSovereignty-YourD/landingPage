import Diagram from '../../../assets/img/loginDiagram.png';
export default function LoginDiagram() {
  return (
    <div className="h-1/2 w-full flex relative pt-60 justify-between items-center mx-5 sm:mx-10 md:w-3/4 md:mx-auto bg-white bg-opacity-70">
      <img src={Diagram} alt="login Diagram" className="w-1/2" />
      <div className="font-semibold text-2xl">
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
