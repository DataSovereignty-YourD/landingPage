import Arrow from "../../../assets/icon/rightArrow.png";
import ScanQR from "../../../assets/img/scanQR.png";
import MyData from "../../../assets/img/mydata.png";
import Rocket from "../../../assets/img/rocket.png";
import offline from "../../../assets/img/offlinePass.png";
import MyData2 from "../../../assets/img/mydata2.png";
export function HowToUseCredential() {
  const onlineMethod = [
    {
      title: "Scan",
      describe: "Scan the QR on the YourD Auth screen",
      image: ScanQR,
    },
    {
      title: "Claim Credential & Authentication",
      describe: "One-touch authentication with biometric authentication",
      image: MyData2,
    },
    {
      title: "Start!",
      describe: "Start the service!",
      image: Rocket,
    },
  ];

  const offlineMethod = [
    {
      title: " Register for events with YourD",
      describe: "Get and save a Credential Data for RSVP",
    },
    {
      title: "Show QR",
      describe: "Get certified for your issued Credential Data",
    },
    {
      title: "Get involved!",
      describe:
        "Once authenticated, join a variety of services and activities!",
    },
  ];

  return (
    <div className="flex flex-col w-full h-fit py-24 justify-center items-center gap-10 sm:gap-16">
      <div className="text-center w-full font-pre-bold font-extrabold text-2xl sm:text-[44px]">
        How to use Credential?
      </div>
      {/**Online */}
      <div className="flex flex-col gap-10">
        <div className=" text-center font-pre-bold text-xl sm:text-[44px]  mt-10">
          Online
        </div>
        <div className="flex gap-2 sm:gap-6 justify-center items-center flex-col sm:flex-row">
          {onlineMethod.map((item, index) => (
            <>
              <div
                key={item.title}
                className="w-full h-[350px] py-10 max-w-[350px]  flex flex-col justify-start rounded-2xl items-center p-3 sm:p-5 lg:p-10 bg-white gap-2 mb-[6px] text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-1/5 sm:w-full sm:h-[120px] mb-5 object-contain ${
                    item.image === MyData2 ? "transform translate-x-3" : ""
                  }`}
                />
                <div className="font-pre-bold text-lg sm:text-lg lg:text-2xl w-full">
                  {item.title}
                </div>
                <div className="font-pre-regular text-sm w-full">
                  {item.describe}
                </div>
              </div>
              <img
                src={Arrow}
                alt="Arrow"
                className={`object-contain mx-auto sm:mx-0 rotate-90 sm:rotate-0 w-5 sm:w-10 ${
                  index === 2 ? "hidden" : ""
                }`}
              />
            </>
          ))}
        </div>
        <div className="font-pre-light text-xl sm:text-3xl max-w-6xl text-center mx-auto">
          With YourD App, Can easily access online services using{" "}
          <span className="font-pre-bold">
            Your<span className="text-maincolor">D </span>
            Authentication
          </span>
        </div>
      </div>
      {/**Offline */}
      <div className="flex flex-col gap-10 border-t-2">
        <div className=" text-center font-pre-bold text-xl sm:text-[44px]  mt-10">
          Offline
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-10">
          <img
            src={offline}
            alt="offline"
            className=" h-[340px] md:h-[400px] lg:h-[584px] object-contain"
          />
          <div className="flex flex-col gap-6 justify-center">
            {offlineMethod.map((item, index) => (
              <>
                <div
                  key={item.title}
                  className="w-full h-fit flex flex-col justify-start rounded-2xl items-center p-3 sm:p-5 md:p-10 bg-white gap-2 mb-[6px] text-center"
                >
                  <div className="font-pre-bold text-2xl ">
                    {item.title}
                  </div>
                  <div>{item.describe}</div>
                  {/* <img src={item.image} alt={item.title} className="w-full object-contain"/> */}
                </div>
                <img
                  src={Arrow}
                  alt="Arrow2"
                  className={`object-contain  mx-auto rotate-90 w-5 sm:w-10 ${
                    index === 2 ? "hidden" : ""
                  }`}
                />
              </>
            ))}
          </div>
        </div>
        <div className="font-pre-light text-xl sm:text-3xl max-w-[840px] text-center mx-auto">
          <span className="font-pre-bold">
            Your<span className="text-maincolor">D</span>{" "}
            App
          </span>{" "}
          allows you to present your VC in a real-world environment, making it
          easy to authenticate and join services.
        </div>
      </div>
    </div>
  );
}
