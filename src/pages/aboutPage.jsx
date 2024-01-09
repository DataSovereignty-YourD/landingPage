import Footer from '../components/common/footer';
import YourdMission from '../components/about/yourdMission';
import YourdMissionDescribe from '../components/about/yourdMissionDescribe';
import YourdTeam from '../components/about/yourdTeam';
import YourdTeamDetail from '../components/about/yourdTeamDetail';
import TeamCard from '../components/about/teamCard';
import StarsCanvas from '../components/canvas/stars';
export default function AboutUs() {
  return (
    <>
    <StarsCanvas/>
    <div className="flex flex-col relative  pt-16 items-center">
      <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
        <YourdMission />
      </div>
      <div className=" bg-sky-100 bg-opacity-70 w-full">
        <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <YourdMissionDescribe />
        </div>
      </div>
      <div className="bg-white bg-opacity-70 w-full">
        <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <YourdTeam />
        </div>
      </div>
      <div className="bg-white w-full bg-opacity-70 pt-10">
        <Footer />
      </div>
    </div>
    </>
  );
}
