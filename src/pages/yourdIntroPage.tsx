import DataWallet from "../assets/img/datawallet.png";
import FastAuth from "../assets/img/fast.png";
import Dataselling from "../assets/img/dataselling.png";

export default function YourDIntroPage() {
  const Solution = [
    {
      title: "Fast Auth",
      description:
        "Providing Fast & Easy Login experience through QR codes. With user-centric authentication, the process becomes faster, eliminating the need for multi-server verification.",
      image: FastAuth,
    },
    {
      title: "Data Wallet",
      description:
        "DataWallet provides a solution for ownership that goes beyond personal information, allowing individuals to view the entire NFT and token ecosystem.",
      image: DataWallet,
    },
    {
      title: "Data Selling",
      description:
        "Own your data, sell it, get compensated. Our Web 3.0 ads ensure privacy and fair pay.",
      image: Dataselling,
    },
  ];
  //"Safely generate revenue from data through various data selling opportunities using ZKP. Explore D-ad (Advertising) and AI training data (upcoming) to securely monetize your data.",
  //데이터 소유권을 가짐으로써 나의 데이터를 판매와 사용에 대한 보상 지급 <br><br> 타겟 광고를 할 수 있는 Web 3.0 광고 프로토콜로, 타겟 광고에 사용된 개인 데이터 유출✕ + 데이터 사용에 대한 보상 지급
  return (
    <div
      id="Solution"
      className="w-full h-full flex flex-col px-12 pt-10 lg:px-32 md:px-20 sm:px-10 min-h-screen  justify-around "
    >
      <div className="w-full pt-10 pb-10">
        <div
          id="title"
          className="text-3xl sm:text-5xl md:text-5xl w-full mx-auto font-[sf-pro-text-bold] sm:text-center sm:p-5 mb-10 text-maincolor"
        >
          Our Service
        </div>

        <div id="description">
          <div className="text-xl sm:text-xl md:text-2xl w-fit mx-auto font-[sf-pro-text] text-gray-500 sm:text-center">
            YourD uses DID and ZKP technologies, which means we cannot access
            any of your data. <br />
            You have direct control over your data and you even have the option
            to sell it for revenue.
          </div>
        </div>
      </div>

      <div id="list" className="xl:px-20 grid w-full mb-5 sm:grid-cols-3 ">
        {Solution.map((item, index) => {
          return (
            <div
              key={index}
              className="px-3 py-5 sm:py-0 xl:px-10 w-full h-full justify-center flex flex-col sm:flex-row mx-auto font-bold font-[font-sf-pro-text-bold]"
            >
              <div className=" shadow-lg contentsbox w-full  rounded-xl bg-white border-color-2 border-2 p-6 text-center hover:border-maincolor">
                <div className="Icon rounded-full overflow-hidden mx-auto w-20 h-20 bg-color-2 items-center">
                  <img src={item.image} className="p-5"></img>
                </div>
                <div className=" mx-auto  flex  flex-col">
                  <span className="text-xl xl:text-2xl  text-black my-5">
                    {item.title}
                  </span>
                  <span className="flex-wrap mx-auto  overflow-hidden  font-medium  text-lg sm:text-sm  xl:text-lg text-left">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
