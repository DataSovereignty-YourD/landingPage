import DescrbieLogin from "../../components/solutions/login/describeLogin";
import LoginDiagram from "../../components/solutions/login/loginDiagram";
import LoginHeader from "../../components/solutions/login/loginHeader";
import AdvantageLogin from "../../components/solutions/login/advantageLogin";
import "../../assets/css/describe1.css";
import LoginVideo from "../../components/solutions/login/loginVideo";
export default function YourDLoginPage() {
  return (
    <div className="flex flex-col relative pt-16 items-center w-full justify-center">
      <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px] ">
        <LoginHeader />
      </div>
      <div className="bg-[#FFF6E0] w-full items-center justify-center flex">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <DescrbieLogin />
        </div>
      </div>
      <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
        <LoginDiagram />
      </div>
      <div className="bg-[#FFF6E0] bg-opacity-70 w-full items-center justify-center flex">
        <div className="max-w-[1600px]">
          <LoginVideo />
        </div>
      </div>
      <div className="bg-neutral-100 bg-opacity-70 w-full items-center justify-center flex">
        <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
          <AdvantageLogin />
        </div>
      </div>
      {/* <div className="h-1/2 w-full relative">
        <LoginButtonCard />
      </div> */}
    </div>
  );
}
