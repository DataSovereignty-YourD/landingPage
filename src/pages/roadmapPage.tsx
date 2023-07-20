import React from "react";

export default function RoadMapPage() {
  return (
    <div id="FAQ" className="p-20  w-full h-full bg-custom-blue">
      <div className="lg:text-4xl  md:text-3xl text-xl font-[font-sf-pro-text-bold] font-bold sm:text-center text-white mb-4">
        YourD Development RoadMap for 2023
      </div>
      <div className="lg:text-xl md:text-lg text-base font-[font-sf-pro-text] sm:text-center">
        We are working hard to protect for your data ownership.
        <br></br> Here are some future developments.
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 py-20">
        <div className="col-span-1  w-full h-full"></div>
        <div className="col-span-3  w-full h-full ">
          <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
            <h1 className="font-bold font-[font-sf-pro-text-bold] text-custom-blue sm:text-xl md:text-2xl text-base py-2">
              Beta Release
            </h1>
            <p className="font-semibold font-[font-sf-pro-text-semibold] text-gray-900  md:text-base sm:text-sm text-xs">
              <li>Data Wallet(Ads)</li>
              <li>Fast Auth</li>
              <li>D-AD</li>
              <li>YourD Login SaaS</li>
            </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1  bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10e text-center">
            1
          </div>
        </div>

        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1  bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10e text-center">
            2
          </div>
        </div>

        <div className="col-span-3 mx-auto w-full h-full ">
          <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
            <h1 className="font-bold font-[font-sf-pro-text-bold]  text-custom-blue sm:text-xl md:text-2xl text-base py-2">
              Full Release
            </h1>
            <p className="font-semibold font-[font-sf-pro-text-semibold] text-gray-900  md:text-base sm:text-sm text-xs">
              <li>Data Wallet(Ads)</li>
              <li>Fast Auth</li>
              <li>D-AD</li>
              <li>YourD Login SaaS</li>
            </p>
          </div>
        </div>
        <div className="col-span-1  w-full h-full"></div>

        <div className="col-span-1  w-full h-full"></div>
        <div className="col-span-3  w-full h-full ">
          <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
            <h1 className="font-bold font-[font-sf-pro-text-bold] text-custom-blue  sm:text-xl md:text-2xl text-base py-2">
              Update
            </h1>
            <p className="font-semibold font-[font-sf-pro-text-semibold] text-gray-900  md:text-base sm:text-sm text-xs ">
              <li>Data Wallet (AI)</li>
              <li> YourD Pay</li>
            </p>
          </div>
        </div>

        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1  bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10e text-center">
            3
          </div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
      </div>
    </div>
  );
}
