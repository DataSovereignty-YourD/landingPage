import DescrbiePayment from "../../components/solutions/payment/describePayment";
import PaymentHeader from "../../components/solutions/payment/paymentHeader";
import "../../assets/css/describe1.css";
import Footer from "../../components/common/footer";
import EmbracePayment from "../../assets/img/embracePayment.png";
import PaymentProcess from "../../components/solutions/payment/paymentProcess";
import AdvantagePayment from "../../components/solutions/payment/advantagePayment";
import EmphasisPayment from "../../components/solutions/payment/EmphasisPayment";
export default function YourDPaymentPage() {
  return (
    <div className="flex flex-col relative pt-16 items-center ">
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px] ">
        <PaymentHeader />
      </div>
      <div className="bg-[#FFF6E0] w-full items-center justify-center flex">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <DescrbiePayment />
        </div>
      </div>
      <div className="bg-sky-50 w-full items-center justify-center flex">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <EmphasisPayment />
        </div>
      </div>
      
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px] bg-white flex-col flex justify-center items-center mb-10 mt-10">
        <div className="text-2xl sm:text-5xl">Your<span className="text-[#FCCC00]">D</span>&nbsp;pay</div>
        <div className="mt-10 text-2xl flex text-center sm:text-5xl font-bold gradientText pb-1">
        The Innovation Crypto Payment module
        </div>
        <img src={EmbracePayment} className="mt-4" />
      </div>
      <div className="bg-[#E3BFFF] bg-opacity-[15%] w-full items-center justify-center flex ">
        <div className="max-w-[1600px]">
          <PaymentProcess />
        </div>
      </div>
      <div className="bg-neutral-100 w-full bg-opacity-70 items-center justify-center flex ">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <AdvantagePayment />
        </div>
      </div>
      <div className="bg-white w-full bg-opacity-70 pt-10 max-w-[1600px] ">
        <Footer />
      </div>
    </div>
  );
}
