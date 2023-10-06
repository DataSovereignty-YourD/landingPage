import DescrbiePass from '../../components/solutions/pass/describePass';
import PassStandard from '../../components/solutions/pass/passStandard';
import PassFunction from '../../components/solutions/pass/passFunction';
import PassDiagram from '../../components/solutions/pass/passDiagram';
import PassHeader from '../../components/solutions/pass/passHeader';
import AdvantagePass from '../../components/solutions/pass/advantagePass';
import PassCard from '../../components/solutions/pass/passCard';
import Footer from '../../components/common/footer';
import '../../assets/css/describe1.css';

export default function YourDPassPage() {
  return (
    <div className="flex flex-col relative  pt-16 items-center">
      <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
        <PassHeader />
      </div>
      <div className=" bg-sky-100 bg-opacity-70 w-full">
        <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <PassStandard />
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
        <DescrbiePass />
      </div>
      <div className="bg-stone-100 bg-opacity-70 w-full">
        <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <PassFunction />
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
        <PassDiagram />
      </div>
      <div className="bg-stone-100 bg-opacity-70 w-full">
        <div className="pt-10 mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <AdvantagePass />
        </div>
      </div>

      {/* <PassCard /> */}

      <div className="bg-white w-full bg-opacity-70 pt-10">
        <Footer />
      </div>
    </div>
  );
}
