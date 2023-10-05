import Pass from "../../../assets/img/passImg.png";
export default function AnalyticHeader() {
  return (
    <div className=" h-[600px]  relative w-full flex justify-between items-center bg-white">
      <div>
        <h className="  text-[66px] font-bold">YourD Analytics</h>
        <div className=" font-semibold text-[60px] gradientText mt-1 relative -top-1">
          Deep, Insightful <br /> Web3.0 Data Analysis
        </div>

        <p className="  font-medium text-xl">
          Dive deeper into the Web 3.0 world with trusted insights and
          user-centric data protection!
        </p>
      </div>
      <img
        src={Pass}
        alt="Login image"
        className="  w-1/2 object-contain pr-10"
      />
    </div>
  );
}
