import PassMobile from "../../../assets/img/YourDPass.png";
import Arrow from "../../../assets/icon/rightArrow.png";

const utilizeData = [
  {
    title: "Own your data",
    describe: "Own your Credential data through YourD Pass",
  },
  {
    title: "Manage your data ",
    describe: "Manage credential data in the form of cards",
  },
  {
    title: "Offline & Online",
    describe: "Authenticate and use your credential data online and offline",
  },
];

export default function PassFunction() {
  return (
    <div className=" w-full h-fit flex flex-col py-[120px] justify-center items-center gap-10 sm:gap-20">
      <div className="font-pre-extrabold text-2xl sm:text-[44px]">Own and Utilize Your Data</div>
      <div className="flex flex-col sm:flex-row gap-16 justify-center  items-center">
        <img src={PassMobile} alt='YourD Pass' className="h-[340px] sm:h-[500px] lg:h-[600px] object-contain"/>
        <div className="flex flex-col gap-8 items-center">
          {utilizeData.map((item,index) => (
            <>
              <div className="flex flex-col w-full px-10 py-8 gap-2 bg-white rounded-3xl shadow-all-around text-center">
                <span className="font-pre-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">{item.title}</span>
                <span className="font-pre-medium text-gray300">{item.describe}</span>
              </div>
              <img
                src={Arrow}
                alt="arrow"
                className={`w-10 object-contain rotate-90 ${
                  index === 2 ? "hidden" : ""
                }`}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
