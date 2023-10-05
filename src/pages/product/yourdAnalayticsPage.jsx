import DescribeAnalytic from "../../components/solutions/analytic/describeAnalytic";
import AnalyticHeader from "../../components/solutions/analytic/analyticHeather";
import AnalyticEmphasis from "../../components/solutions/analytic/analyticEmphasis";
import AdvantageAnalytic from "../../components/solutions/analytic/advantageAnalytic";
import AnalyticCard from "../../components/solutions/analytic/analyticCard";

import Footer from "../../components/common/footer";
import "../../assets/css/describe1.css";

export default function YourDAnalyticPage() {
  return (
    <div className="flex flex-col relative  pt-16 items-center  ">
      <div className=" mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
        <AnalyticHeader />
      </div>
      <div className="bg-neutral-100 bg-opacity-70">
        <div className="mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
          <DescribeAnalytic />
        </div>
      </div>
      <div className="bg-sky-50 ">
        <div className="mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
          <AnalyticEmphasis />
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
      <AdvantageAnalytic />
      </div>
      {/* <div className="h-[600px] w-full relative">
        <AnalyticCard />
      </div> */}
      <Footer />
    </div>
  );
}
