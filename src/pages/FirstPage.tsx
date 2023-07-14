export default function FirstPage() {
  return (
    <div
      id="Home"
      className="w-full h-screen bg-gradient-to-b to-color-5  from-color-1"
    >
      <div className="flex justify-center flex-col w-full h-screen z-10">
        <div className="mb-40">
          <div className="text-5xl text-black sm:text-5xl md:text-6xl lg:text-8xl w-fit mx-auto font-[sf-pro-text-bold] font-bold text-center animate-fade-up animate-once animate-ease-in animate-alternate animate-duration-1000">
            Ignite Data Ownership
          </div>
          <div className="text-xl text-gray-600 sm:text-3xl md:text-4xl lg:text-4xl font-[sf-pro-text-semibold] w-fit mx-auto pt-10  animate-fade-up animate-once animate-ease-in animate-alternate animate-delay-100 animate-duration-1000">
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
