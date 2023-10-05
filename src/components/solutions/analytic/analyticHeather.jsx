import Pass from "../../../assets/img/passImg.png";
export default function AnalyticHeader() {
  return (
    <div className="h-1/2 relative w-full text-center sm:text-left flex flex-col sm:flex-row justify-between items-center py-12">
      <div>
        <div className=" text-2xl sm:text-4xl font-bold">YourD Analytics</div>
        <div className="font-semibold text-3xl sm:text-6xl gradientText mt-4 py-1">
          Deep, Insightful <br /> Web3.0 Data Analysis
        </div>

        <p className=" font-regular text-xl mt-4">
          Dive deeper into the Web 3.0 world with trusted insights and
          user-centric data protection!
        </p>
      </div>
      <img
        src={Pass}
        alt="Login image"
        className="   h-[340px] sm:h-[400px] sm:my-0 object-contain"
      />
    </div>
  );
}
