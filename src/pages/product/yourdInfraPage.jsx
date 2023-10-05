import DescribeInfra from "../../components/solutions/leverageInfra/describeInfra";
import InfraHeader from "../../components/solutions/leverageInfra/infraHeather";
import AdvantageInfra from "../../components/solutions/leverageInfra/advantageInfra";
import InfraCard from "../../components/solutions/leverageInfra/infraCard";
import Footer from "../../components/common/footer";
import "../../assets/css/describe1.css";

export default function YourDInfraPage() {
  return (
    <div className="flex flex-col relative items-center w-full ">
      <div className="mx-5 sm:mx-10 md:w-4/5 md:mx-auto pt-16 ">
        <InfraHeader />
      </div>
      <div className="bg-neutral-100 bg-opacity-70">
        <div className="mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
          <DescribeInfra />
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
        <AdvantageInfra />
      </div>
      {/* <div className="h-[600px] w-full relative">
        <InfraCard />
      </div> */}
      <Footer />
    </div>
  );
}
