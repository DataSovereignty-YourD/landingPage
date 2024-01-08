import DescrbiePayment from '../../components/solutions/payment/describePayment';
import EmphasisPayment from '../../components/solutions/payment/EmphasisPayment';
import PaymentHeader from '../../components/solutions/payment/paymentHeader';
import '../../assets/css/describe1.css';
import Footer from '../../components/common/footer';
import EmbracePayment from '../../assets/img/embraceCrypto.png';
import PaymentProcess from '../../components/solutions/payment/paymentProcess';
import AdvantagePayment from '../../components/solutions/payment/advantagePayment';
export default function YourDPaymentPage() {
  return (
    <div className="flex flex-col relative pt-16 items-start w-full ">
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] ">
        <PaymentHeader />
      </div>
      <div className="bg-[#FFF6E0]">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
          <DescrbiePayment />
        </div>
      </div>
      <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] bg-neutral-100">
        <EmphasisPayment />
      </div>
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] bg-white flex-col flex justify-center items-center mb-10 mt-10">
        <div className="mt-10 text-5xl font-bold gradientText">
          Embrace cryptocurrencies
        </div>
        <img src={EmbracePayment} className="mt-4" />
      </div>
      <div className="bg-[#E3BFFF] bg-opacity-[15%] w-full">
        <PaymentProcess />
      </div>
      <div className="bg-neutral-100 bg-opacity-70">
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
