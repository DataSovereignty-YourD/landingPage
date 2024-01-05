import Diagram from '../../../assets/img/YourDLoginDiagram.png';
import Payment from '../../../assets/img/payment2.png';
export default function EmphasisPayment() {
  return (
    <div className=" h-fit min-h-1/2 w-full flex flex-col relative py-32 sm:py-20 justify-between items-center   bg-opacity-70 gap-20">
      <div className="text-5xl font-bold">
        Your<span className="text-[#fccc00]">D</span> Crypto Pay:{' '}
        <span className="gradientText">결제의 새 지평선</span>
      </div>
      <div className="flex justify-center items-center gap-20">
        <img
          src={Payment}
          alt="Auth Diagram"
          className=" w-full sm:w-3/4 lg:w-2/5 object-contain "
        />
        <div className=" text-lg sm:text-xl lg:text-3xl w-full sm:w-4/5 ">
          <span className='text-4xl font-bold '>보안과 편의성의 완벽한 조화 </span><br/>
          <div className='mt-12 font-pre-light'>YourD Crypto Pay는 사용자가 탈중앙화된
          신원 인증을 통해 신속하고 용이하게 인증을 완료할 수 있는 방식을
          도입합니다. 이는 금융기관이 요구하는 엄격한 기준을 충족하면서도,
          사용자 친화적인 UI와 원터치 결제 시스템을 통해 간편한 결제 경험을
          가능하게 합니다.</div>
        </div>
      </div>
    </div>
  );
}
