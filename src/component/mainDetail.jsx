import DataSelling from "../assets/img/dataSelling.png";
import YourDSaaS from "../assets/img/dataPass.png";
import FastAuth from "../assets/img/fastAuth.png";
import { useRef } from "react";
import { useIsVisible } from "../hooks/view";

export default function MainDetail() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);

  const yourdIntroduce = [
    {
      id: 1,
      ref: ref1,
      isVisible: isVisible1,
      name: "YourD Pass",
      description:
        "YourD is an app that allows you to easily perform personal identity verification using YourD's DID-based authentication protocol. With this app, you can directly own your personal data and simplify the cumbersome identity verification process, enabling quick and convenient login with just a QR code",
      image: FastAuth,
    },
    {
      id: 2,
      ref: ref2,
      isVisible: isVisible2,
      name: "YourD SaaS",
      description:
        "We offer an innovative solution that prioritizes data security and individual data ownership, including user analysis, compliance with regulations such as GDPR, and features like convenient identity authentication and targeted advertising",
      image: YourDSaaS,
    },
    {
      id: 3,
      ref: ref3,
      isVisible: isVisible3,
      name: "Data Selling",
      description:
        "As a result of establishing data ownership, users can control and even buy or sell their own data",
      image: DataSelling,
    },
  ];

  return (
    <div className="w-3/5 mx-auto flex flex-col gap-60 h-screen mt-60">
      <div className="grid grid-cols-12 w-full backdrop-blur-sm justify-center items-center ">
        <img src={FastAuth} alt="" className=" col-span-5" />
        <div className="w-full flex flex-col col-span-7 px-10">
          <div className="  uppercase flex w-full text-start text-4xl font-bold mb-10">
            YourD Pass & SaaS
          </div>
          <div className="text-xl">
            DID-based Authentication Protocol: GDPR Compliance Analysis, Easy
            Login, Data Sale, and Targeted Advertising, among other services,
            enable companies to provide efficient services without compromising
            personal data.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full backdrop-blur-sm justify-center items-center">
        <div className="w-full flex flex-col col-span-7 px-10">
          <div className="  uppercase flex w-full text-start text-4xl font-bold mb-10">
            Data Selling
          </div>
          <div className="text-xl">
            Using a DID-based authentication protocol, companies can offer
            efficient services through various offerings such as GDPR compliance
            analysis, fast authentication, data selling, targeted advertising,
            and more, all without the risk of personal data leakage.
          </div>
        </div>
        <img src={DataSelling} alt="" className=" col-span-5" />
      </div>
      <div className=" items-center flex justify-center flex-col pt-48 mb-48">
        <div className=" uppercase text-5xl">global standard</div>
        <div className=" text-xl whitespace-pre-line">
          We actively engage in the development of global standards to ensure
          that digital identity functions effectively for all.
        </div>
        <img src="" alt="" />
      </div>
      <div className="w-4/5 mx-auto flex flex-col gap-60 min-h-screen mt-60">
        {yourdIntroduce.map((item) => {
          return (
            <div
              key={item.id}
              ref={item.ref}
              className={`backdrop-blur-sm grid grid-cols-12 w-full justify-center items-center transition-all duration-500 delay-100 ease-out ${
                item.isVisible
                  ? "translate-x-0"
                  : item.id % 2 === 0
                  ? "opacity-100 translate-x-52"
                  : "opacity-50 -translate-x-52"
              }`}
            >
              {item.id % 2 === 0 ? (
                <img
                  src={item.image}
                  alt=""
                  className=" col-span-5 content-center"
                />
              ) : (
                <></>
              )}
              <div className="w-full flex flex-col col-span-7">
                <span className="  uppercase flex w-full text-start text-4xl font-bold mb-10">
                  {item.name}
                </span>
                <span className="text-xl ">{item.description}</span>
              </div>
              {item.id % 2 === 1 ? (
                <img src={item.image} alt="" className=" col-span-5" />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
