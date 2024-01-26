import YourDLogo from '../../assets/img/D.webp';
import StarsCanvas from '../canvas/stars';
export default function YourdMission() {
  return (
    <div className="min-h-[800px] flex flex-col items-center justify-center relative text-[60px] sm:text-[96px] font-bold text-black ">
      <StarsCanvas />
      <div className="flex absolute top-1/3 sm:top-1/4 left-1/3 z-10 sm:left-1/4 transform -translate-x-1/2 -translate-y-1/2 items-baseline">
        PROVE
        <div className="w-[20px] h-[20px] bg-[#fccc00] ml-2"></div>{' '}
      </div>
      <div className="relative sm:absolute top-1/2 left-1/2 transform -translate-x-1/2  sm:-translate-y-1/2">
        <img
          src={YourDLogo}
          alt="YourD Logo"
          className="object-contain w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-baseline">
        OWN<div className="w-[20px] h-[20px] bg-[#fccc00] ml-2"></div>
      </div>
      <div className="absolute top-2/3 sm:top-3/4 left-2/3 sm:left-3/4 transform -translate-x-1/2 -translate-y-1/2 flex items-baseline whitespace-nowrap">
        APPLY<div className="w-[20px] h-[20px] bg-[#fccc00] ml-2"></div>
      </div>
    </div>
  );
}
