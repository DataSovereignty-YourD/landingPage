import LocationPayment from '../../../assets/img/locationPayment.png';
import ModulePayment from '../../../assets/img/paymentModule.png';
export default function EmphasisPayment() {
  return (
    <div className=" h-fit min-h-1/2 w-full flex flex-col relative py-32 sm:py-20 justify-between items-center   bg-opacity-70 gap-20">
      <div className="text-5xl font-bold">
        Your<span className="text-[#fccc00]">D</span>Pay:{' '}
        <span className="gradientText">A new horizon for payments</span>
      </div>
      <div className="flex justify-center items-center mx-10 gap-4 w-full bg-white">
        <img
          src={LocationPayment}
          alt="Location_payment"
          className=" w-full sm:w-3/4 lg:w-2/5 object-contain"
        />
        <div className=" text-lg sm:text-xl lg:text-3xl py-10 px-4 sm:w-4/5 ">
          <span className="text-4xl font-bold ">
            Without location restrictions
          </span>
          <br />
          <div className="mt-12 font-pre-light">
            <div>
              We provide a universal payment solution that can be used in both
              the real world and virtual space.
            </div>
            <div className='mt-2'> Pay easily from anywhere.</div>
            <div className='mt-2'>
              {' '}
              Design complex crypto payment systems easily so users don't need
              to know anything technical.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 mt-20">
        <img
          src={ModulePayment}
          alt="Location_payment"
          className=" w-full sm:w-3/4 lg:w-2/5 object-contain "
        />
        <div className=" text-lg sm:text-xl lg:text-3xl w-full shadow-lg bg-white py-10 px-4 rounded-xl sm:w-4/5 ">
          <span className="text-4xl font-bold ">
          Payment module provided
          </span>
          <br />
          <div className="mt-12 font-pre-light">
            <div>
            Easily integrate into your business with an efficient and powerful payment module.
            </div>

            <div className='mt-4'>
              {' '}
              Experience continuous innovation by responding to new payment trends through user-oriented design and ease of upgrade.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
