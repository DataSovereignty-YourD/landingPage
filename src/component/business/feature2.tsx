import Dashboard from "../../assets/img/Dashborad.png";

export default function Feature2() {
    
      return (
        <section className="h-screen w-screen bg-white text-gray-800 ">
          <div className="h-full w-full container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="h-full w-full">
              <div className="h-full w-full flex  items-end justify-center md:p-2 ">
                <img
                  src={Dashboard}
                  alt=""
                  className=" object-contain overflow-hidden relative rounded-r-2xl h-full w-full shadow-lg  aspect-video sm:min-h-96 "
                />
              </div>
            </div>
            <div className="h-full flex  flex-col  align-middle px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
              <span className="pt-32 sm:pt-64 text-4xl  font-[font-sf-pro-text-bold] font-bold text-center text-maincolor mb-4">
                Data API{" "}
                <p className="text-gray-500 text-xl">with GDPR Compliance</p>
              </span>
              <p className=" font-[font-sf-pro-text]  text-xl  text-left">
                <span>Easy API</span> - If you want custom data like a ranking
                system, we can provide tailored solutions to meet your specific
                needs with ease and efficiency.
              </p>
            </div>
          </div>
        </section>
      );
}