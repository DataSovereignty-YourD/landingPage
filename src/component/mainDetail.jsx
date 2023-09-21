import DataSelling from "../assets/img/dataSelling.png";
import DataPass from "../assets/img/dataPass.png";
import FastAuth from "../assets/img/fastAuth.png";

export default function MainDetail() {
  return (
    <div className="mx-80 backdrop-blur-sm">
      <div className="grid grid-cols-8 my-48">
        <img
          src={FastAuth}
          alt=""
          className="   w-[600px] col-span-5 mx-auto "
        />

        <div className="items-center justify-center flex w-full flex-col col-span-3">
          <div className=" text-4xl font-bold w-full text-start">
            YourD Pass & SaaS
          </div>

          <div className=" text-xl">
            DID 기반의 인증 프로토콜로 GDPR 준수 분석, fast auth, 데이터 판매,
            타겟 광고 등 다양한 서비스를 통해 기업들은 개인 데이터 유출 없이
            효율적인 서비스를 제공할 수 있습니다.
          </div>
        </div>
      </div>
      <div className="    grid grid-cols-8 my-48">
        <div className="   flex items-center justify-center col-span-3  ">
          <div className=" flex flex-col">
            <div className=" text-4xl font-bold ">Data Selling</div>
            <div className=" text-xl ">
              데이터 소유권 확립으로 인해 유저들은 스스로 데이터를 통제하고 사고
              팔 수 있습니다.
            </div>
          </div>
        </div>

        <img
          src={DataPass}
          alt=""
          className="   w-[600px] col-span-5 mx-auto"
        />
      </div>
      <div className="   grid grid-cols-8 my-48">
        <img
          src={DataSelling}
          alt=""
          className="  mx-auto w-[600px] col-span-5"
        />
        <div className=" flex items-center justify-center col-span-3 text-4xl font-bold">
          Data Selling
        </div>
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
