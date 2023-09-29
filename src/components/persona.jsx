import { GoPerson } from "react-icons/go";

export default function Persona() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col">
        {/* <GoPerson className="border border-gray-600 rounded-full" /> */}
        <div className="w-80 h-44 bg-white rounded-2xl shadow-lg relative "> 
        <div className="w-24 h-8 bg-slate-200 rounded-lg mt-10 ml-10">결제 진입로/하차로</div>
        <span className="text-black font-medium"></span></div>
      </div>
    </div>
  );
}
