import PassMobile from "../../../assets/img/passMobile.png";
import { HiMiniArrowLongDown } from "react-icons/hi2";
export default function PassFunction() {
  return (
    <div className="  w-full  my-24">
      <div className="   flex flex-row justify-center gap-8  px-18  min-h-">
        <div className="   flex flex-col items-center justify-center font-bold text-4xl">
          <div className="  w-full  mb-12">
            Safely Own and Preserve Your Data
          </div>
          <img
            src={PassMobile}
            alt=""
            className="   h-[600px] w-[300px]  flex mx-auto"
          />
        </div>
        <div className="  flex flex-col items-center justify-center transform translate-x-5 pt-24">
          <div className="   bg-[#f0a9a9] rounded-full border w-5 h-5"></div>
          <div className="   border-r bg-gradient-to-b from-[#f0a9a9] to-[#f4e9e9]  h-[450px] w-2 "></div>
        </div>

        <div className="   flex flex-col gap-36 items-center justify-center pt-24">
          <div className=" flex flex-col w-full gap-2 ">
            <div className="   text-2xl font-bold w-full ">Own your data</div>
            <div>The user is given a VC and possesses the data</div>
          </div>
          {/* <HiMiniArrowLongDown size={52} /> */}
          <div className="  flex flex-col gap-2 w-full">
            <div className="   text-2xl font-bold w-full ">Store your data</div>
            <div>With a DID, users store their data securely.</div>
          </div>

          {/* <HiMiniArrowLongDown size={52} /> */}
          <div className=" flex flex-col gap-2 w-full ">
            <div className=" text-2xl font-bold w-full ">
              Control and Utilize your data
            </div>
            <div>: with the principle of Web 3.0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
