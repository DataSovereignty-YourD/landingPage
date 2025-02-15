import YourdMission from '../components/about/yourdMission';
import YourdMissionDescribe from '../components/about/yourdMissionDescribe';
import YourdTeam from '../components/about/yourdTeam';
import YourdAwards from '../components/about/yourdAwards';
import StarsCanvas from '../components/canvas/stars';
export default function AboutUs() {
  return (
    <>
    <StarsCanvas/>
    <div className=" flex flex-col relative  sm:pt-16 items-center">
      <div className=" mx-5 sm:mx-10 md:w-3/4 md:mx-auto max-w-[1600px]">
        <YourdMission />
      </div>
      <div className="  bg-sky-100 bg-opacity-70 w-full relative">
        <div className=" mx-5 sm:mx-10 md:w-3/4 md:mx-auto max-w-[1600px] ">
          <YourdMissionDescribe />
        </div>
      </div>
      <div className=" bg-white bg-opacity-70 w-full relative">
        <div className=" mx-5 sm:mx-10 md:w-3/4 md:mx-auto max-w-[1600px]">
          <YourdTeam />
        </div>
      </div>
      <div className=" bg-neutral-50 bg-opacity-70 w-full relative mt-10">
        <div className=" mx-5 sm:mx-10 md:w-3/4 md:mx-auto max-w-[1600px] ">
          <YourdAwards />
        </div>
      </div>
    </div>
    </>
  );
}
