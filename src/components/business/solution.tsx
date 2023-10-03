import DataSelling from "../../assets/img/dataSelling.png";
import YourDSaaS from "../../assets/img/dataPass.png";
import FastAuth from "../../assets/img/fastAuth.png";
import Analytics from "../../assets/img/analytics.png";
import OutlineButton from "../utils/buttons/outlineButton";

export default function Solution() {
  const solutions = [
    {
      id: 1,
      title: "Web 3.0 Simplified Login Solution",
      subtitle: "Start your project without the complexity with YourD Login",
      description:
        "YourD Login introduces a seamless login approach, addressing the complexities of conventional wallet logins and simplifying the building of Web 3.0 projects. This makes it a true Web 3.0 login solution that opens up real-world possibilities.",
      image: FastAuth,
      bgColor: "bg-[#fccc00]",
    },{
      id: 2,
      title: "Web 3.0 Data Ownership Solution",
      subtitle: "Implement User-Centric Data Management with YourD Pass",
      description:
        "YourD Pass is a solution conceived around the principle of user data ownership. It is versatile, finding applications in a wide array of fields from online digital identity to offline RSVP and RWA. This enables users to manage and utilize their data effectively, representing a genuine Web 3.0 solution.",
      image: YourDSaaS,
      bgColor: "bg-[#fccc00]",
    },{
      id: 3,
      title:
        "YourD Analytics: The Next-Generation User Analysis Tool for Web 3.0",
      subtitle:
        "Conduct Effective Analysis while Upholding Data Sovereignty with YourD Analytics",
      description:
        "The implementation of YourD Login and YourD Pass makes user analysis in adherence to laws such as GDPR and CCPA feasible in the Web 3.0 framework. This offers companies the capability to honor user data sovereignty and explore avenues for continuous service enhancement and novel growth.",
      image: Analytics,
      bgColor: "bg-[#007aff]",
    },{
      id: 4,
      title: "YourD Data Leverage Infra",
      subtitle:
        "Maximizing Data Value: YourD Paving the Way for Emerging Business Models in a Web 3.0 Landscape",
      description:
        "YourD empowers users and service providers to co-create the value of their data. Zero-Knowledge Proof enables secure transmission and management of data, and YourD gives you the freedom to explore and discover new business models and opportunities in various fields in a Web 3.0 environment.",
      image: DataSelling,
      bgColor: "bg-[#007aff]",
    },
  ];

  const solutionBox = (solution: any) => (
    <div
      className={`md:col-span-5 flex flex-col my-auto items-start justify-center h-fit p-3 md:p-6  rounded-sm  backdrop-blur-sm bg-opacity-20 ${solution.bgColor}`}
    >
      <span className="font-bold text-lg sm:text-xl sm:leading-6 md:leading-7 md:text-2xl leading-5 mb-1 sm:mb-2">
        {solution.title}
      </span>
      <span className="font-medium text-[16px] sm:text-lg text-slate-400 ">
        {solution.subtitle}
      </span>
      <span className="font-medium text-gray-700 mt-2 sm:mt-5 text-[14px] sm:text-lg leading-4">
        {solution.description}
      </span>
      <div className="mt-4">
        <OutlineButton />
      </div>
    </div>
  );

  return (
    <div className="mx-5 sm:mx-10 md:w-3/4 md:mx-auto min-h-screen pb-20 flex flex-col items-center justify-center font-sf-pro-text relative ">
      {/* <div className="font-bold text-xl sm:text-4xl">YourD Gateway</div>
      <div className="font-medium text-[16px] sm:text-xl mt-4 mb-10 text-center leading-5">
        Quick and easy to get started with true Web 3.0, YourD is here to guide
        you.
      </div> */}
      <div className=" w-full">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className="flex flex-col md:grid md:grid-cols-11 "
          >
            {index % 2 === 1 && (
              <>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="hidden md:flex md:col-span-5 object-contain p-5 sm:p-10 h-full "
                />
                <div className="md:col-span-1 border-slate-300 border-2 w-0 mx-auto border-dashed " />
              </>
            )}
            <img
              src={solution.image}
              alt={solution.title}
              className="md:hidden md:col-span-5 object-contain mb-2 p-5 sm:p-10  "
            />
            {solutionBox(solution)}
            {index % 2 === 0 && (
              <>
                <div className=" md:col-span-1 border-slate-300 border-2 w-1 mx-auto border-dashed " />
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="hidden md:flex  col-span-5 object-contain  p-5 sm:p-10 h-full"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
