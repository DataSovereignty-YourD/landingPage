
export default function FirstPage() {
  return (
    <div
      id="Home"
      className="w-full h-screen bg-gradient-to-b to-white via-blue-300 from-[#007AFF]"
    >
      <div className="flex justify-center flex-col w-full h-screen z-10">
        <div className="mb-40">
          <div className="text-5xl text-white sm:text-5xl md:text-6xl lg:text-8xl  w-fit mx-auto font-sf-pro-text font-bold text-center  ">
            Ignite Data Ownership
          </div>
          <div className="text-xl text-black sm:text-3xl md:text-4xl lg:text-4xl font-sf-pro-text w-fit mx-auto pt-10">
            Take Control of Your Data Sovereignty
          </div>
        </div>
      </div>
      {/* <div className="w-96 h-96 absolute z-[1] right-0 top-[50px]">
        <img src={bgimg} alt="bg" />
      </div> */}
    </div>
  );
}
