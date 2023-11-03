export default function AdvantagePass() {
  return (
    <div className=" h-fit py-10 sm:py-20 w-full relative items-center justify-center  flex flex-col gap-10 sm:gap-20">
      <div className=" font-pre-bold text-3xl sm:text-[44px] flex text-center justify-center gradientText">
        Embrace a World of New Experiences
      </div>
      <div className=" grid grid-cols-6 items-start justify-center gap-10">
        {advantageFeatures.map((feature, index) => (
          <div
            key={index}
            className="col-span-6 sm:col-span-3 lg:col-span-2 hover:scale-105 duration-200 transform transition-transform gap-5 bg-white rounded-[20px] p-3 sm:p-10 h-full  grid grid-auto-rows-1fr shadow-all-around"
          >
            {/* <img
              src={feature.img}
              alt={feature.title}
              className=" w-[30px] sm:w-[36px] object-contain mb-2"
            /> */}
            <span className=" font-pre-bold text-lg md:text-2xl leading-5 items-start justify-start flex">
              {feature.title}
            </span>
            <span className=" font-pre-regular font-bold text-sm h-fit sm:text-lg text-gray300">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
const advantageFeatures = [
  {
    //   img: data,
    title: "True Data Ownership",
    text: "ExaDesigned around user data ownership to increase control and protection of personal information.mple",
  },
  {
    //   img: global,
    title: "SeInternational Standards Compliance",
    text: "EBSI and Open ID compliant VCs of European residents can also be stored",
  },
  {
    //   img: law,
    title: "Easy sign-in feature",
    text: "YourD Authentication makes it easy to sign in using your own credentials.",
  },
  {
    //   img: onboarding,
    title: "Wide range of applications",
    text: "From online digital identity to offline RSVP, RWA, and more.",
  },
  {
    //   img: secure,
    title: "Building a transparent digital ecosystem",
    text: "Data management centered on the individual, providing trust for both users and service providers.",
  },
  {
    //   img: analysis,
    title: "Web 3.0 Compatibility",
    text: "YourD Pass provides a true Web 3.0 solution, facilitating integration with blockchain and decentralized web technologies.",
  },
];
