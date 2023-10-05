import DescribeAnalytic from "../../components/solutions/analytic/describeAnalytic";
import AnalyticHeader from "../../components/solutions/analytic/analyticHeather";
import AnalyticEmphasis from "../../components/solutions/analytic/analyticEmphasis";
import AdvantageAnalytic from "../../components/solutions/analytic/advantageAnalytic";
import AnalyticCard from "../../components/solutions/analytic/analyticCard";

import Footer from "../../components/common/footer";
import "../../assets/css/describe1.css";

export default function YourDAnalyticPage() {
  return (
    <div className="flex flex-col relative  pt-32 items-center mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
      <AnalyticHeader />
      <DescribeAnalytic />
      <AnalyticEmphasis />

      <AdvantageAnalytic />
      {/* <div className="h-[600px] w-full relative">
        <AnalyticCard />
      </div> */}
      <Footer />
    </div>
  );
}
