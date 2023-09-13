import Img from "../assets/svg/Business_SVG.svg";
import EarthCanvas from "../component/canvas/Earth";
import SpaceCanvas from "../component/canvas/Space";

export default function FirstPage() {
  return (
    <section className="h-full w-full bg-black">
      <div className=" h-full flex flex-col justify-center p-6   lg:flex-row ">
        <div className="w-full h-full items-center justify-center ">
          <SpaceCanvas />
        </div>

        <div className="flex flex-row absolute mt-80  items-center">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-700 to-violet-100"></div>
          </div>
          <div className=" flex flex-col justify-center p-6  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="font-[sf-pro-text-bold] text-5xl font-bold leadi sm:text-6xl text-white">
              Ignite
              <br className="h-10"></br>
              <span className="font-[sf-pro-text-bold] font-bold text-maincolor">
                Data Ownership
              </span>
            </h1>
            <p className="font-[sf-pro-text] mt-6 mb-8 text-lg sm:mb-12 text-white">
              Take Control of Your Data Sovereignty
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold font-[sf-pro-text-semibold] rounded bg-maincolor dark:text-gray-900"
              >
                Get Start
              </a>
              <div>
                <EarthCanvas />
              </div>
              {/* <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
                >
                 more info
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
