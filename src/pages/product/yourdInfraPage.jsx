import DescribeInfra from "../../components/solutions/infra/describeInfra";
import InfraHeader from "../../components/solutions/infra/infraHeather";
import AdvantageInfra from "../../components/solutions/infra/advantageInfra";
import InfraCard from "../../components/solutions/infra/infraCard";
import Footer from "../../components/common/footer";
import "../../assets/css/describe1.css";

export default function YourDInfraPage() {
  return (
    <div className="flex flex-col relative  pt-32 items-center  mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
      <InfraHeader />
      <DescribeInfra />

      <AdvantageInfra />
      {/* <div className="h-[600px] w-full relative">
        <InfraCard />
      </div> */}
      <Footer />
    </div>
  );
}
