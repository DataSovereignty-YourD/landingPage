import DescribeAnalytic from '../../components/solutions/analytic/describeAnalytic';
import AnalyticHeader from '../../components/solutions/analytic/analyticHeather';
import AnalyticEmphasis from '../../components/solutions/analytic/analyticEmphasis';
import AdvantageAnalytic from '../../components/solutions/analytic/advantageAnalytic';
import AnalyticCard from '../../components/solutions/analytic/analyticCard';

import Footer from '../../components/common/footer';
import '../../assets/css/describe1.css';

export default function YourDAnalyticPage() {
  return (
    <div className="flex flex-col relative  pt-16 items-center  ">
      <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
        <AnalyticHeader />
      </div>
      <div className="bg-[#FFE9B1] bg-opacity-20">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
          <DescribeAnalytic />
        </div>
      </div>
      <div className="bg-black bg-opacity-90">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
          <AnalyticEmphasis />
        </div>
      </div>
      <div className=" bg-gray200 bg-opacity-70">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px]">
          <AdvantageAnalytic />
        </div>
      </div>
      {/* <div className="h-[600px] w-full relative">
        <AnalyticCard />
      </div> */}
      <div className="bg-white w-full bg-opacity-70 pt-10">
        <Footer />
      </div>
    </div>
  );
}
