import DescrbiePayment from "../../components/solutions/payment/describePayment";
import EmphasisPayment from "../../components/solutions/payment/EmphasisPayment";
import PaymentHeader from "../../components/solutions/payment/paymentHeader";
import "../../assets/css/describe1.css";
import Footer from "../../components/common/footer";
import PaymentProcess from "../../components/solutions/payment/paymentProcess";
import AdvantagePayment from "../../components/solutions/payment/advantagePayment";
export default function YourDPaymentPage() {
  return (
    <div className="flex flex-col relative pt-16 items-center max-w-[1600px]">
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] ">
        <PaymentHeader />
      </div>
      <div className="bg-[#FFF6E0] w-full items-center justify-center flex">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] ">
          <DescrbiePayment />
        </div>
      </div>
      
      {/* <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px] bg-white flex-col flex justify-center items-center mb-10 mt-10">
        <div className="mt-10 text-5xl font-bold gradientText pb-1">
          Embrace cryptocurrencies
        </div>
        <img src={EmbracePayment} className="mt-4" />
      </div> */}
      <div className="bg-[#E3BFFF] bg-opacity-[15%] w-full items-center justify-center flex ">
        
          <PaymentProcess />
        
      </div>
      <div className="bg-neutral-100 w-full bg-opacity-70 items-center justify-center flex ">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
          <AdvantagePayment />
        </div>
      </div>
      <div className="bg-white w-full bg-opacity-70 pt-10">
        <Footer />
      </div>
    </div>
  );
}
