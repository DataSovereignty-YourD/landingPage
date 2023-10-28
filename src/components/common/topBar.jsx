import { useState } from "react";
import logo from "../../assets/img/YourD-Logo-high.png";
import SideNav from "../../pages/sideNavPage";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(false);
  const solutions = [
    {
      id: 1,
      solution: "YourD Pass",
      product: [],
      path: "yourd_pass",
    },
    {
      id: 2,
      solution: "YourD Authentication",
      product: [
        { name: "Web Auth", path: "yourd_web_auth" },
        { name: "RSVP", path: "", isComingSoon: true },
        {
          name: "Digital Identity Management",
          path: "",
          isComingSoon: true,
        },
      ],
      path: "yourd_web_auth",
    },
    {
      id: 3,
      solution: "YourD Analytics",
      product: [],
      path: "yourd_analytics",
    },
    {
      id: 4,
      solution: "YourD Data Leverage Infra",
      product: [],
      path: "yourd_infra",
    },
  ];

  return (
    <div className="flex flex-col w-screen  fixed z-50">
      <div
        className={`bg-white  w-full flex justify-between items-start px-4 sm:px-[5%] transition-all duration-300 `}
      >
        <Link to="/" className="flex h-16 justify-center">
          <img
            src={logo}
            alt="logo"
            className=" flex items-center w-12 sm:w-16 object-contain"
          />
        </Link>

        <div
          onMouseLeave={() => setTopBarVisible(false)}
          className="flex flex-row h-16  sm:gap-10 items-center justify-center"
        >
          {
            <div
              onMouseEnter={() => setTopBarVisible(true)}
              className={`hidden sm:flex flex-col items-start justify-start z-40`}
            >
              <div className="px-5 py-[6px] font-pre-bold bg-gray-100 rounded-full text-[16px]">
                Solutions
              </div>
              <div
                onMouseLeave={() => setTopBarVisible(false)}
                className={`flex flex-col absolute w-fit mt-[48px] text-lg gap-1 bg-white px-5 py-6 -ml-6 shadow-all-around text-[#848484] ${
                  isTopBarVisible
                    ? "opacity-100 delay-300 "
                    : "opacity-0 hidden"
                }`}
              >
                {solutions.map((solution) => {
                  return (
                    <div
                      className={`flex flex-col w-full px-5 rounded-sm py-1 hover:text-black hover:bg-maincolor text-gray300  hover:bg-opacity-20`}
                    >
                      <Link
                        to={
                          solution.solution !== "YourD Auth"
                            ? solution.path
                            : undefined
                        }
                        key={solution.id}
                        className={` `}
                      >
                        {solution.solution}
                      </Link>
                      {solution.product.map((product) =>
                        product.isComingSoon ? (
                          <div className="px-5 text-[16px] py-1 hover:text-black text-gray300">
                            {product.name} (Coming Soon)
                          </div>
                        ) : (
                          <Link
                            className="px-5 text-[16px] py-1 text-gray300 hover:text-black"
                            to={product.path || solution.path}
                          >
                            {product.name}
                          </Link>
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          }
          <Link
            to="/contact"
            className="hidden sm:flex h-16 justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold border-black border-2 rounded-full transition-all duration-300 hover:bg-[#fccc00]">
              Contact Us
            </span>
          </Link>
          <div className="block sm:hidden items-center">
            <SideNav />
          </div>
        </div>
      </div>
      {/* <div
        className={`hidden sm:flex justify-between w-full absolute mt-16 bg-white transition-all duration-300
                  ${isTopBarVisible ? `h-[136px]` : " h-0"}
                `}
      >
        <div />
        
      </div> */}
    </div>
  );
}
