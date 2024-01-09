import Payment from '../../../assets/img/paymentMain.png';
export default function PaymentHeader() {
  return (
    <div className="relative w-full text-center sm:text-left flex flex-col md:flex-row justify-between items-center  bg-white bg-opacity-70">
      <div className="h-fit pt-10 sm:pt-20  sm:pb-20 z-10">
        <div className="text-2xl sm:text-[32px] font-pre-bold">
          Your<span className="text-[#fccc00]">D</span> Pay
        </div>
        <div className="font-pre-bold text-3xl sm:text-[56px] gradientText mt-3 leading-none">
          Seamless, <br />
          Unified Payments
          <br /> for Web 3.0
        </div>

        <p className="font-pre-reqular text-xl mt-10">
          {/* Open a <span className="text-[#fccc00]">safe</span> and{" "}
          <span className="text-[#fccc00]">fast</span> step to the Web 3.0
          world! */}
          Transition to the Web 3.0 economy. User-friendly one-touch crypto payment
        </p>
      </div>
      <img
        src={Payment}  // 이미지 수정
        alt="WebAuthImage"
        className=" top-10 mb-10 md:mb-0 sm:pb-0 mt-10 sm:mt-0 md:absolute right-0 w-[70%] md:w-[320px] lg:w-[380px] z-0  rounded-3xl object-contain shadow-all-around "
      />
    </div>
  );
}
