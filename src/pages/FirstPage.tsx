import Img from '../assets/svg/Business_SVG.svg';
import EarthCanvas from '../component/canvas/Earth';
import SpaceCanvas from '../component/canvas/space';

export default function FirstPage() {
  return (
    <section id= "First" className="  h-full w-full bg-black">
      <div className="   h-full flex flex-col justify-center p-6   lg:flex-row ">
        <div className="  flex w-full h-full">
        </div>
        <div className=" flex-row flex top-1/3 ">
          <div className="   flex flex-col justify-center p-6  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" text-center font-[sf-pro-text-bold] text-5xl font-bold leadi sm:text-6xl text-white">
              <br className="  h-10"></br>
              <span className="  font-[sf-pro-text-bold] font-bold text-maincolor">
                Ignite Data Ownership
              </span>
            </h1>
            <p className=" text-center font-[sf-pro-text] mt-6 mb-8 text-lg sm:mb-12 text-white">
              Take Control of Your Data Sovereignty
            </p>
            <div className="  justify-center items-center flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="border-dashed border-yellow-700  flex px-8 py-3 text-lg font-semibold font-[sf-pro-text-semibold] rounded  dark:text-white hover:text-gray-400"
              >
                Start Exploring
              </a>

              {/* <a
                    rel="noopener noreferrer"
                    href="#"
                    className="  px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
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
