import DataSelling from "../../assets/img/dataSelling.png";
import YourDSaaS from "../../assets/img/dataPass.png";
import FastAuth from "../../assets/img/fastAuth.png";
import Analytics from "../../assets/img/analytics.png";
import { Link } from "react-router-dom";
import LearnMore from "../../assets/icon/learnMoreIcon.png";

export default function Solution() {
  const solutions = [
    {
      id: 1,
      title: "Web 3.0 Data Ownership Solution",
      subtitle: "Implement User-Centric Data Management with YourD Pass",
      description:
        "YourD Pass is a solution conceived around the principle of user data ownership. It is versatile, finding applications in a wide array of fields from online digital identity to offline RSVP and RWA. This enables users to manage and utilize their data effectively, representing a genuine Web 3.0 solution.",
      image: YourDSaaS,
      path: "/yourd_pass",
    },
    {
      id: 2,
      title: "Web 3.0 Simplified Login Solution",
      subtitle: "Start your project without the complexity with YourD Login",
      description:
        "YourD Login introduces a seamless login approach, addressing the complexities of conventional wallet logins and simplifying the building of Web 3.0 projects. This makes it a true Web 3.0 login solution that opens up real-world possibilities.",
      image: FastAuth,
      path: "/yourd_login",
    },

    {
      id: 3,
      title:
        "YourD Analytics: The Next-Generation User Analysis Tool for Web 3.0",
      subtitle:
        "Conduct Effective Analysis while Upholding Data Sovereignty with YourD Analytics",
      description:
        "The implementation of YourD Login and YourD Pass makes user analysis in adherence to laws such as GDPR and CCPA feasible in the Web 3.0 framework. This offers companies the capability to honor user data sovereignty and explore avenues for continuous service enhancement and novel growth.",
      image: Analytics,
      path: "/yourd_analytics",
    },
    {
      id: 4,
      title: "YourD Data Leverage Infra",
      subtitle:
        "Maximizing Data Value: YourD Paving the Way for Emerging Business Models in a Web 3.0 Landscape",
      description:
        "YourD enables users and service providers to co-create the value of their data in a Web 3.0 environment. By incorporating zero-knowledge proof (ZKP), users can selectively disclose certain information, ensuring data privacy while increasing the value of their data. This approach not only preserves data sovereignty, but also provides freedom to explore and discover new business models and opportunities in a variety of fields.",
      image: DataSelling,
      path: "/yourd_infra",
    },
  ];

  const solutionBox = ({ solution, index }: any) => (
    <div
      key={solution.id}
      className={` md:col-span-1 flex my-3 flex-col h-fit items-center justify-start p-3 sm:p-5 sm:pb-0 md:p-10 md:pb-0 rounded-[32px] grid-auto-rows-1fr  backdrop-blur-sm bg-[#FFE9B1] bg-opacity-20 overflow-hidden ${
        index === 3 ? "sm:translate-y-[136px]" : ""
      } ${index === 1 ? "sm:translate-y-[176px]" : ""}`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <span className="font-pre-bold text-lg sm:text-xl sm:leading-6 md:leading-7 md:text-2xl leading-5 text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
            {solution.id}.&nbsp;&nbsp;{solution.title}
          </span>
          <span className="font-pre-medium text-lg sm:text-lg md:text-xl text-gray400">
            {solution.subtitle}
          </span>
          <span className="font-pre-medium text-gray300 text-[14px] sm:text-[16px] md:text-lg leading-7 mt-4">
            {solution.description}
          </span>
        </div>
        <div className="flex justify-between ">
          <Link to={solution.path}>
            {/* <OutlineButton /> */}
            <img
              src={LearnMore}
              alt={solution.title}
              className="object-contain w-[50px] sm:w-[70px] md:w-[3.75rem] mt-5"
            />
          </Link>
          <img
            src={solution.image}
            alt={solution.title}
            className="relative w-[260px] sm:w-[320px] lg:w-[360px] object-contain "
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-5 sm:mx-10 md:mx-16 lg:mx-[136px] min-h-screen h-min  flex flex-col items-start justify-start font-sf-pro-text relative transition-all duration-300">
      <div className=" w-full flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-5 lg:gap-10 ">
        {solutions.map((solution, index) => solutionBox({ solution, index }))}
      </div>
    </div>
  );
}
