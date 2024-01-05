import DescrbieLogin from '../../components/solutions/payment/describePayment';
import LoginDiagram from '../../components/solutions/payment/EmphasisPayment';
import PaymentHeader from '../../components/solutions/payment/paymentHeader';
import AdvantageLogin from '../../components/solutions/payment/advantagePayment';
import '../../assets/css/describe1.css';
import Footer from '../../components/common/footer';

export default function YourDPaymentPage() {
  return (
    <div className="flex flex-col relative pt-16 items-start w-full ">
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] ">
        <PaymentHeader />
      </div>
      <div className="bg-[#FFF6E0]">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
          <DescrbieLogin />
        </div>
      </div>
      <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] bg-neutral-100">
        <LoginDiagram />
      </div>
      <div className="bg-neutral-100 bg-opacity-70">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
          <AdvantageLogin />
        </div>
      </div>
      {/* <div className="h-1/2 w-full relative">
        <LoginButtonCard />
      </div> */}
      <div className='bg-white w-full bg-opacity-70 pt-10'>
      <Footer/></div>
    </div>
  );
}
