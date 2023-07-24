import Img from "../assets/svg/Business_SVG.svg";

export default function FirstPage() {
  return (
    <section className="h-full w-full  bg-backcolor ">
      <div className="container h-full flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-44 lg:px-20 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="font-[sf-pro-text-bold] text-5xl font-bold leadi sm:text-6xl">
            Ignite
            <br className="h-10"></br>
            <span className="font-[sf-pro-text-bold] font-bold text-maincolor">
              Data Ownership
            </span>
          </h1>
          <p className="font-[sf-pro-text] mt-6 mb-8 text-lg sm:mb-12">
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
            {/* <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
             more info
            </a> */}
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}
