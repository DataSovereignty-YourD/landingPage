import { GoPerson } from "react-icons/go";

export default function Persona() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col">
        <GoPerson className="border border-gray-600 rounded-full" />
      </div>
    </div>
  );
}
