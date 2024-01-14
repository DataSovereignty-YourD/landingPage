import DescribeAnalytic from '../../components/solutions/analytic/describeAnalytic';
import AnalyticHeader from '../../components/solutions/analytic/analyticHeader';
import AnalyticEmphasis from '../../components/solutions/analytic/analyticEmphasis';
import AdvantageAnalytic from '../../components/solutions/analytic/advantageAnalytic';
import Footer from '../../components/common/footer';
import '../../assets/css/describe1.css';

export default function YourDAnalyticPage() {
  return (
    <div className="flex flex-col relative  pt-16 items-center  ">
      <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
        <AnalyticHeader />
      </div>
      <div className="bg-[#FFF6E0] w-full items-center justify-center flex">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <DescribeAnalytic />
        </div>
      </div>
      <div className="bg-black bg-opacity-90 w-full items-center justify-center flex">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <AnalyticEmphasis />
        </div>
      </div >
      {/* <div className=" bg-gray100 bg-opacity-70"> */}
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] items-center justify-center flex">
         <div className='max-w-[1600px]'>
           <AdvantageAnalytic />
         </div>
        </div>
      {/* </div> */}
      {/* <div className="h-[600px] w-full relative">
        <AnalyticCard />
      </div> */}
      <div className="bg-white w-full bg-opacity-70 pt-10 max-w-[1600px]">
        <Footer />
      </div>
    </div>
  );
}
