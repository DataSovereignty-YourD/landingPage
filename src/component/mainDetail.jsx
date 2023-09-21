import DataSelling from "../assets/img/dataSelling.png";
import DataPass from "../assets/img/dataPass.png";
import FastAuth from "../assets/img/fastAuth.png";

export default function MainDetail() {
  return (
    <div className="w-3/5 mx-auto flex flex-col gap-60 h-screen mt-60">
      <div className="grid grid-cols-12 w-full backdrop-blur-sm justify-center items-center">
        <img src={FastAuth} alt="" className=" col-span-5" />
        <div className="w-full flex flex-col col-span-7 px-10">
          <div className="  uppercase flex w-full text-start text-4xl font-bold mb-10">
            YourD Pass & SaaS
          </div>
          <div className="text-xl">
            DID-based Authentication Protocol: GDPR Compliance Analysis, Easy
            Login, Data Sale, and Targeted Advertising, among other services,
            enable companies to provide efficient services without compromising
            personal data.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full backdrop-blur-sm justify-center items-center">
        <div className="w-full flex flex-col col-span-7 px-10">
          <div className="  uppercase flex w-full text-start text-4xl font-bold mb-10">
            Data Selling
          </div>
          <div className="text-xl">
            Using a DID-based authentication protocol, companies can offer
            efficient services through various offerings such as GDPR compliance
            analysis, fast authentication, data selling, targeted advertising,
            and more, all without the risk of personal data leakage.
          </div>
        </div>
        <img src={DataSelling} alt="" className=" col-span-5" />
      </div>
      <div className=" items-center flex justify-center flex-col pt-48 mb-48">
        <div className=" uppercase text-5xl">global standard</div>
        <div className=" text-xl whitespace-pre-line">
          We actively engage in the development of global standards to ensure
          that digital identity functions effectively for all.
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
