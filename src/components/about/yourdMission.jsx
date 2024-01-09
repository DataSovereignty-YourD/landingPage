import YourDLogo from '../../assets/img/D.png';
import StarsCanvas from '../canvas/stars';
export default function YourdMission() {
  return (
    <>

      <div className="min-h-[800px]  items-center justify-center flex flex-col">
        {/* <div className="text-xl sm:text-5xl font-bold items-center justify-center flex ">
        About US
      </div>
      
      <div className="  flex flex-row items-center gap-32 justify-center transform translate-x-5 pt-24">
        <div className="   bg-[#cce7fc] rounded-full border w-[300px] h-[300px] items-center flex justify-center text-4xl font-bold">
          PROVE
        </div>
        <div className="   bg-[#6f81ea] rounded-full border w-[300px] h-[300px] items-center flex justify-center text-4xl font-bold">
          OWN
        </div>
        <div className="   bg-[#3f41a2] rounded-full border w-[300px] h-[300px] items-center flex justify-center text-4xl font-bold">
          APPLY
        </div>
      </div> */}
        <img src={YourDLogo} className="object-contain w-[600px]" />
      </div>
    </>
  );
}
