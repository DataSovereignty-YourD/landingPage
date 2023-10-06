export default function AdvantagePass() {
  return (
    <div className=" h-screen w-full relative items-center justify-center  flex flex-col">
      <div className=" font-bold text-[56px] flex text-center justify-center gradientText">
        Embrace a World of New Experiences
      </div>
      <div className=" grid grid-cols-6 items-start justify-center mt-24">
        {advantageFeatures.map((feature, index) => (
          <div
            key={index}
            className=" features hover:scale-105 duration-200 transform transition-transform  col-span-3 sm:col-span-2 m-2 sm:m-3 items-center justify-center flex flex-col  min-h-[220px] sm:min-h-[280px] bg-white drop-shadow-xl p-3 sm:p-4 "
          >
            {/* <img
              src={feature.img}
              alt={feature.title}
              className=" w-[30px] sm:w-[36px] object-contain mb-2"
            /> */}
            <h3 className=" font-bold text-lg md:text-2xl sm:py-3 leading-5 min-h-[56px] items-center justify-center flex">
              {feature.title}
            </h3>
            <br />
            <p className=" text-sm h-fit sm:text-lg">{feature.text}</p>
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
    text: "YourD Login makes it easy to sign in using your own credentials.",
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
