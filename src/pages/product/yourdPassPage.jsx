import DescrbiePass from "../../components/solutions/pass/describePass";
import PassStandard from "../../components/solutions/pass/passStandard";
import PassFunction from "../../components/solutions/pass/passFunction";
import PassHeader from "../../components/solutions/pass/passHeader";
import AdvantagePass from "../../components/solutions/pass/advantagePass";
import Footer from "../../components/common/footer";
import "../../assets/css/describe1.css";
import { HowToUseCredential } from "../../components/solutions/pass/howToUseCredential";

export default function YourDPassPage() {
  return (
    <div className="flex flex-col relative  pt-16 items-center">
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[2048px]">
        <PassHeader />
      </div>
      <div className="w-full bg-[#BBEFFF] bg-opacity-25 items-center justify-center flex">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[2048px] ">
          <DescrbiePass />
        </div>
      </div>
      <div className="w-full bg-black bg-opacity-90 items-center justify-center flex">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[2048px]">
          <PassStandard />
        </div>
      </div>

      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[2048px] items-center justify-center flex">
        <PassFunction />
      </div>
      <div className="bg-gray100 bg-opacity-70 w-full items-center justify-center flex">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[2048px] ">
          <HowToUseCredential />
          {/* <PassDiagram /> */}
        </div>
      </div>

      <div className=" w-full">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] items-center justify-center flex">
          <AdvantagePass />
        </div>
      </div>

      {/* <PassCard /> */}

      <div className="bg-white w-full bg-opacity-70 pt-10  max-w-[2048px]">
        <Footer />
      </div>
    </div>
  );
}
