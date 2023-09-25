import DataSelling from "../assets/img/dataSelling.png";
import YourDSaaS from "../assets/img/dataPass.png";
import FastAuth from "../assets/img/fastAuth.png";
import { useRef } from "react";
import { useIsVisible } from "../hooks/view";
import OutlineButton from "./utils/buttons/outlineButton";
import { Link } from 'react-router-dom';
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
    <div className="w-4/5 mx-auto flex flex-col gap-60 min-h-screen mt-60">
      {yourdIntroduce.map((item) => {
        return (
          <div
            key={item.id}
            ref={item.ref}
            className={`backdrop-blur-sm grid grid-cols-12 w-full justify-center items-center transition-all duration-1000 ease-out ${
              item.isVisible
                ? "translate-x-0"
                : item.id % 2 === 0
                ? "opacity-100 translate-x-full"
                : "opacity-50 -translate-x-full"
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
              <span className="text-xl ">{item.description} </span>
              <Link to={'/Product'} className="mt-5">
                <OutlineButton />
              </Link>
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
  );
}