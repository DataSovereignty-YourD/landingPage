import React, { useState } from "react";

export default function YourdStack() {
  const [activeLayer, setActiveLayer] = useState(null);
  const handleButtonClick = () => {
    setActiveLayer((prevLayer) => (prevLayer ? null : "Data Selling Layer"));
  };
  return (
    <div className="   mx-48 flex items-center justify-center h-screen flex-col text-3xl">
      <div className="  text-5xl font-bold mb-4">YourD Stack</div>
      <div className="  w-full flex flex-row gap-2 backdrop-blur-sm">
        <div className=" text-md  grid grid-rows-10 gap-4  p-2">
          <button
            className=" bg-slate-200 h-20 rounded-xl row-span-2 mt-24 flex items-center justify-center"
            onClick={handleButtonClick}
          >
            Data Selling Layer
          </button>
          <button className=" h-20 bg-slate-200 rounded-xl row-span-6 flex  items-center justify-center">
            Analytic Layer
          </button>
          <button className=" h-20 bg-slate-200 rounded-xl  row-span-3  flex items-center justify-center">
            Authentication Layer
          </button>
          <button className=" h-20 bg-slate-200 rounded-xl row-span-4 flex items-center justify-center">
            Data ownership Layer
          </button>
        </div>
        <div
          className={`absolute top-32 left-[245px] bg-white transition-all duration-500 border border-red-700 ${
            activeLayer ? " w-[910px] h-96" : "w-0 overflow-hidden"
          }`}
          style={{ transition: "width 0.5s ease-in-out" }}
        >
          {activeLayer === "Data Selling Layer" && (
            <div className="p-4 w-full flex h-full">
              <div>Data</div>
              <div>Data</div>
              <div>Data</div>
              <div>Data</div>
              <div>Data</div>
              <div>Data</div>
              <div>Data</div>
            </div>
          )}
        </div>
        <div className="  items-center justify-center w-full ">
          <div className="border border-slate-400 rounded-xl h-32 flex items-center justify-center ">
            Data Web 3.0 Service
          </div>
          <div className=" border-4 border-[#fccc00] ">
            <div className="    grid grid-cols-4 gap-2 p-2">
              <div className=" border border-slate-400 rounded-xl h-32 col-span-1 flex items-center justify-center">
                Ads
              </div>
              <div className=" border border-slate-400 rounded-xl h-32 col-span-1 flex items-center justify-center">
                AI
              </div>
              <div className=" border border-slate-400 rounded-xl h-32 col-span-1 flex items-center justify-center">
                Finance
              </div>
              <div className=" border border-slate-400 rounded-xl h-32 col-span-1 flex items-center justify-center">
                Health
              </div>
            </div>
            {/* <div className="  grid grid-cols-4  p-2">
              <div className=" rounded-xl h-32 col-span-4 text-red-400 items-center justify-center flex w-full">
                Data Selling Layer
              </div>
            </div> */}
            <div className="    grid grid-cols-6 p-2 gap-2">
              <div className=" border border-slate-400  rounded-xl h-32 col-span-4 flex items-center justify-center">
                Login 3.0 Protocol
              </div>
              <div className="border border-slate-400 rounded-xl   col-span-2 row-span-3  flex items-center justify-center">
                Realtime DB
              </div>
              <div className="border border-slate-400 rounded-xl h-32 col-span-2 flex items-center justify-center">
                YourD Login
              </div>
              <div className="border border-slate-400 rounded-xl h-32 col-span-2 flex items-center justify-center">
                YourD Pass
              </div>
            </div>
            {/* <div className="  grid grid-cols-4 p-2">
              <div className=" rounded-xl h-32 col-span-4 text-red-400 flex items-center justify-center">
                Analytic Layer
              </div>
            </div> */}

            <div className="  grid grid-cols-4 p-2">
              <div className="border border-slate-400 rounded-xl h-32 col-span-4 flex items-center justify-center">
                YourD DID SDK
              </div>
            </div>

            {/* <div className="  grid grid-cols-4 p-2">
              <div className=" rounded-xl h-32 col-span-4 text-red-400 flex items-center justify-center">
                Authentication Layer
              </div>
            </div> */}
          </div>
          <div className="   grid grid-cols-4 p-2">
            <div className="border border-slate-400 rounded-xl h-32 col-span-4 flex items-center justify-center">
              Blockchain
            </div>
          </div>
          {/* <div className="  grid grid-cols-4 p-2">
            <div className=" rounded-xl h-32 col-span-4 text-red-400 flex items-center justify-center">
              Data ownership Layer
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
