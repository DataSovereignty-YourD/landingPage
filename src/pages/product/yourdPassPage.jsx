import DescrbiePass from "../../components/solutions/pass/describePass";
import PassStandard from "../../components/solutions/pass/passStandard";
import PassFunction from "../../components/solutions/pass/passFunction";
import PassDiagram from "../../components/solutions/pass/passDiagram";
import PassHeader from "../../components/solutions/pass/passHeader";
import AdvantagePass from "../../components/solutions/pass/advantagePass";
import PassCard from "../../components/solutions/pass/passCard";
import Footer from "../../components/common/footer";
import "../../assets/css/describe1.css";

export default function YourDPassPage() {
  return (
    <div className="flex flex-col relative  pt-32 items-center  mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
      <PassHeader />
      <PassStandard className="" />
      <DescrbiePass />
      <PassFunction />
      <PassDiagram />
      <AdvantagePass />
      <div className="h-[600px] w-full relative">
        <PassCard />
      </div>
      <Footer />
    </div>
  );
}
