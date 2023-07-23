import Dashboard from "../../assets/img/Dashborad.png";

export default function Feature1() {
    return (
        <section className="h-screen w-full bg-white text-gray-800">
          <div className="h-full w-full container flex flex-col mx-auto lg:flex-row  py-6 lg:py-12">
            <div className="h-full flex  flex-col  align-middle px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
              <p className="pt-32 sm:pt-64 text-4xl  font-[font-sf-pro-text-bold] font-bold text-center text-maincolor mb-4">
                Data analytics
              </p>
              <p className="font-[font-sf-pro-text]  text-xl  text-left">
                Analyzing GDPR-compliant data using ZKP (Zero-Knowledge Proofs)
                technology to provide charts and statistical information.
              </p>
            </div>
    
            <div className="h-full w-full">
              <div className="h-full w-full flex  items-end justify-center md:p-2 lg:pl-12">
                <img
                  src={Dashboard}
                  alt=""
                  className=" object-contain overflow-hidden relative rounded-l-2xl h-full w-full shadow-lg  aspect-video sm:min-h-96 "
                />
              </div>
            </div>
          </div>
        </section>
      );
    
}