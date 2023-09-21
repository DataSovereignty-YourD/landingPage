import DataSelling from "../assets/img/dataSelling.png";
import DataPass from "../assets/img/dataPass.png";
import FastAuth from "../assets/img/fastAuth.png";

export default function MainDetail() {
  return (
    <div className="  mx-80 ">
      <div className="  grid grid-cols-8 my-48">
        <img src={FastAuth} alt="" className="  w-[600px] col-span-5" />
        <div className="  uppercase flex items-center justify-center col-span-3 text-4xl font-bold">
          Fast Auth
        </div>
      </div>
      <div className="   grid grid-cols-8 my-48">
        <div className=" uppercase flex items-center justify-center col-span-4 text-4xl font-bold ">
          Data Pass
        </div>
        <img src={DataPass} alt="" className="  w-[600px] col-span-4" />
      </div>
      <div className="  grid grid-cols-8 my-48">
        <img src={DataSelling} alt="" className="  w-[600px] col-span-5" />
        <div className=" uppercase flex items-center justify-center col-span-3 text-4xl font-bold">
          Data Selling
        </div>
      </div>
    </div>
  );
}
