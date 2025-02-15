import DescribeInfra from '../../components/solutions/leverageInfra/describeInfra';
import InfraHeader from '../../components/solutions/leverageInfra/infraHeader';
import AdvantageInfra from '../../components/solutions/leverageInfra/advantageInfra';
// import InfraCard from '../../components/solutions/leverageInfra/infraCard';
import '../../assets/css/describe1.css';

export default function YourDInfraPage() {
  return (
    <div className="flex flex-col relative pt-16 items-center  w-full ">
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
        <InfraHeader />
      </div>
      <div className="bg-[#E3BFFF] bg-opacity-[15%] w-full items-center justify-center flex">
        <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <DescribeInfra />
        </div>
      </div>
      <div className="px-5 sm:px-10 md:px-16 lg:px-[136px] bg-gray100 bg-opacity-70 items-center justify-center flex w-full">
       <div className='max-w-[1600px]'>
         <AdvantageInfra />
       </div>
      </div>
      {/* <div className="h-[600px] w-full relative">
        <InfraCard />
      </div> */}
    </div>
  );
}
