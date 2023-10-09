import Footer from "../components/common/footer";
import YourdMission from "../components/about/yourdMission";
import YourdMissionDescribe from "../components/about/yourdMissionDescribe";
import YourdDiagram from "../components/about/yourdDiagram";
import YourdTeam from "../components/about/yourdTeam";
import YourdTeamDetail from "../components/about/yourdTeamDetail";
import YourdCard from "../components/about/yourdCard";
import YourdRoadmap from "../components/about/yourdRoadmap";
export default function AboutUs() {
  return (
    <div className="flex flex-col relative  pt-16 items-center">
      <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
        <YourdMission />
      </div>
      <div className=" bg-sky-100 bg-opacity-70 w-full">
        <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <YourdMissionDescribe />
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
        <YourdDiagram />
      </div>
      <div className="bg-stone-100 bg-opacity-70 w-full">
        <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <YourdTeam />
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
        <YourdTeamDetail />
      </div>
      <div className="bg-stone-100 bg-opacity-70 w-full">
        <div className="pt-10 mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <YourdCard />
        </div>
      </div>
      <div className="bg-stone-100 bg-opacity-70 w-full">
        <div className="pt-10 mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
          <YourdRoadmap />
        </div>
      </div>

      <div className="bg-white w-full bg-opacity-70 pt-10">
        <Footer />
      </div>
    </div>
  );
}
